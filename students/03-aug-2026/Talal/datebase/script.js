
let students = [];
let nextId = 1;

document.addEventListener('DOMContentLoaded', function() {
    loadStudentsFromLocalStorage();
    loadDarkModePreference();
    setupEventListeners();
    displayStudents();
    updateStatistics();
    updateDateTime();
    
    setInterval(updateDateTime, 1000);
});

function loadStudentsFromLocalStorage() {
    const stored = localStorage.getItem('students');
    const storedId = localStorage.getItem('nextId');
    
    if (stored) {
        students = JSON.parse(stored);
        nextId = storedId ? parseInt(storedId) : Math.max(...students.map(s => s.id)) + 1;
    } else {
        // Initialize with sample data
        initializeSampleData();
    }
}

function saveStudentsToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('nextId', nextId.toString());
}

function initializeSampleData() {
    students = [
        {
            id: 1,
            name: 'Ali Khan',
            age: 22,
            email: 'ali.khan@university.edu',
            gender: 'Male',
            department: 'Computer Science',
            address: '123 Street, Islamabad',
            created_at: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Fatima Ahmed',
            age: 21,
            email: 'fatima.ahmed@university.edu',
            gender: 'Female',
            department: 'Software Engineering',
            address: '456 Avenue, Lahore',
            created_at: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Hassan Raza',
            age: 26,
            email: 'hassan.raza@university.edu',
            gender: 'Male',
            department: 'Computer Science',
            address: '789 Road, Karachi',
            created_at: new Date().toISOString()
        },
        {
            id: 4,
            name: 'Amina Malik',
            age: 19,
            email: 'amina.malik@university.edu',
            gender: 'Female',
            department: 'Business Administration',
            address: '321 Lane, Rawalpindi',
            created_at: new Date().toISOString()
        }
    ];
    nextId = 5;
    saveStudentsToLocalStorage();
}

// Load dark mode preference
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateDarkModeButton();
    }
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.toString());
    updateDarkModeButton();
}

function updateDarkModeButton() {
    const btn = document.getElementById('dark-mode-toggle');
    const isDarkMode = document.body.classList.contains('dark-mode');
    btn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function updateDateTime() {
    const now = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true
    });
    
    document.getElementById('current-date').textContent = dateString;
    document.getElementById('current-time').textContent = timeString;
}

function setupEventListeners() {

    document.getElementById('student-form').addEventListener('submit', addStudent);

    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
    
    document.getElementById('search-name').addEventListener('input', filterStudents);
    document.getElementById('filter-department').addEventListener('change', filterStudents);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    
    const modal = document.getElementById('edit-modal');
    const closeBtn = document.querySelector('.close');
    const closeModalBtn = document.getElementById('close-modal');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    closeModalBtn.addEventListener('click', () => closeModal(modal));
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    document.getElementById('edit-form').addEventListener('submit', saveEditedStudent);
}

function addStudent(e) {
    e.preventDefault();
    
    const student = {
        id: nextId++,
        name: document.getElementById('name').value.trim(),
        age: parseInt(document.getElementById('age').value),
        email: document.getElementById('email').value.trim(),
        gender: document.getElementById('gender').value,
        department: document.getElementById('department').value,
        address: document.getElementById('address').value.trim(),
        created_at: new Date().toISOString()
    };
    
    if (students.some(s => s.email === student.email)) {
        alert('⚠️ This email already exists!');
        return;
    }
    
    students.push(student);
    saveStudentsToLocalStorage();
    document.getElementById('student-form').reset();
    
    displayStudents();
    updateStatistics();
    
    showNotification('✅ Student added successfully!');
}

function deleteStudent(id) {
    const student = students.find(s => s.id === id);
    
    const confirmed = confirm(
        `❓ Are you sure you want to delete ${student.name}?\n\nThis action cannot be undone.`
    );
    
    if (confirmed) {
        students = students.filter(s => s.id !== id);
        saveStudentsToLocalStorage();
        displayStudents();
        updateStatistics();
        showNotification('✅ Student deleted successfully!');
    }
}

function openEditModal(id) {
    const student = students.find(s => s.id === id);
    const modal = document.getElementById('edit-modal');
    
    document.getElementById('edit-id').value = student.id;
    document.getElementById('edit-name').value = student.name;
    document.getElementById('edit-age').value = student.age;
    document.getElementById('edit-email').value = student.email;
    document.getElementById('edit-gender').value = student.gender;
    document.getElementById('edit-department').value = student.department;
    document.getElementById('edit-address').value = student.address;
    
    modal.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

function saveEditedStudent(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('edit-id').value);
    const student = students.find(s => s.id === id);
    
    const newEmail = document.getElementById('edit-email').value.trim();
    
    if (newEmail !== student.email && students.some(s => s.email === newEmail)) {
        alert('⚠️ This email already exists!');
        return;
    }
    
    student.name = document.getElementById('edit-name').value.trim();
    student.age = parseInt(document.getElementById('edit-age').value);
    student.email = newEmail;
    student.gender = document.getElementById('edit-gender').value;
    student.department = document.getElementById('edit-department').value;
    student.address = document.getElementById('edit-address').value.trim();
    
    saveStudentsToLocalStorage();
    closeModal(document.getElementById('edit-modal'));
    displayStudents();
    updateStatistics();
    showNotification('✅ Student updated successfully!');
}

function displayStudents() {
    const tbody = document.getElementById('students-tbody');
    tbody.innerHTML = '';
    
    if (students.length === 0) {
        tbody.innerHTML = '<tr class="empty-state"><td colspan="9">No students added yet. Add a student to get started!</td></tr>';
        return;
    }
    
    students.forEach(student => {
        const row = document.createElement('tr');
    
        if (student.age > 25) {
            row.classList.add('highlight-age');
        }
        
        const dateObj = new Date(student.created_at);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td><strong>${student.name}</strong></td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.department}</td>
            <td>${student.address || '-'}</td>
            <td>${formattedDate}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn btn-sm" onclick="openEditModal(${student.id})">✏️ Edit</button>
                    <button class="delete-btn btn-sm" onclick="deleteStudent(${student.id})">🗑️ Delete</button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Filter students
function filterStudents() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    const filterDept = document.getElementById('filter-department').value;
    
    const tbody = document.getElementById('students-tbody');
    tbody.innerHTML = '';
    
    const filtered = students.filter(student => {
        const matchesName = student.name.toLowerCase().includes(searchName);
        const matchesDept = filterDept === '' || student.department === filterDept;
        return matchesName && matchesDept;
    });
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr class="empty-state"><td colspan="9">No students found matching your filters.</td></tr>';
        return;
    }
    
    filtered.forEach(student => {
        const row = document.createElement('tr');
        
        if (student.age > 25) {
            row.classList.add('highlight-age');
        }
        
        const dateObj = new Date(student.created_at);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td><strong>${student.name}</strong></td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td>${student.department}</td>
            <td>${student.address || '-'}</td>
            <td>${formattedDate}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn btn-sm" onclick="openEditModal(${student.id})">✏️ Edit</button>
                    <button class="delete-btn btn-sm" onclick="deleteStudent(${student.id})">🗑️ Delete</button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function resetFilters() {
    document.getElementById('search-name').value = '';
    document.getElementById('filter-department').value = '';
    displayStudents();
}

function updateStatistics() {
    if (students.length === 0) {
        document.getElementById('stat-total').textContent = '0';
        document.getElementById('stat-average').textContent = '0';
        document.getElementById('stat-max').textContent = '0';
        document.getElementById('stat-min').textContent = '0';
        return;
    }
    
    const ages = students.map(s => s.age);
    const total = students.length;
    const average = (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(1);
    const max = Math.max(...ages);
    const min = Math.min(...ages);
    
    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-average').textContent = average;
    document.getElementById('stat-max').textContent = max;
    document.getElementById('stat-min').textContent = min;
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function exportStudents() {
    const dataStr = JSON.stringify(students, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'students_backup.json';
    link.click();
}

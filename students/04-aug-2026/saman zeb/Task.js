// ==========================================//
//     Part 3 – JavaScript OOP (Classes)    //
// ========================================//

class Student {
  constructor(id, name, age, email, gender, department, skills, dob, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.department = department;
    this.skills = skills;
    this.dob = dob;
    this.address = address;
  }

  displayInfo() {
    return this.name + ' (' + this.department + ')';
  }

  updateStudent(newName, newAge, newEmail) {
    this.name = newName;
    this.age = newAge;
    this.email = newEmail;
  }

  deleteStudent() {
  }
}
 
        //Create another class ``StudentManager``


class StudentManager {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  deleteStudent(id) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        this.students.splice(i, 1);
        break;
      }
    }
  }

  updateStudent(id, newName, newAge, newEmail) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        this.students[i].updateStudent(newName, newAge, newEmail);
        break;
      }
    }
  }

  searchStudent(query) {
    let matchedStudents = [];
    query = query.toLowerCase();
    for (let i = 0; i < this.students.length; i++) {
      let s = this.students[i];
      if (s.name.toLowerCase().includes(query) || s.department.toLowerCase().includes(query)) {
        matchedStudents.push(s);
      }
    }
    return matchedStudents;
  }

  displayAllStudents() {
    return this.students;
  }
}

const manager = new StudentManager();

let initialData = [
  { id: 1, name: 'Ayesha Khan', age: '21', email: 'ayesha.khan@example.com', gender: 'Female', department: 'Computer Science', skills: 'HTML, CSS', dob: '12/09/2004', address: 'Gate 2 Wah' },
  { id: 2, name: 'Bilal Ahmed', age: '22', email: 'bilal.ahmed@example.com', gender: 'Male', department: 'Information Technology', skills: 'JavaScript', dob: '15/06/2002', address: '34 Lake Avenue' },
  { id: 3, name: 'Sana Malik', age: '20', email: 'sana.malik@example.com', gender: 'Female', department: 'Computer Science', skills: 'HTML, JavaScript', dob: '22/11/2003', address: 'University Road Haripur' },
  { id: 4, name: 'Omar Abbas', age: '23', email: 'omar.abbas@example.com', gender: 'Male', department: 'Software Engineering', skills: 'CSS, JavaScript', dob: '08/03/2001', address: 'Pine city Haripur' },
  { id: 5, name: 'Ali', age: '19', email: 'ali@example.com', gender: 'Male', department: 'Business', skills: 'HTML', dob: '30/07/2004', address: '90 Park Drive' }
];

for (let i = 0; i < initialData.length; i++) {
  const d = initialData[i];
  const s = new Student(d.id, d.name, d.age, d.email, d.gender, d.department, d.skills, d.dob, d.address);
  manager.addStudent(s);
}

let studentForm = document.getElementById('studentForm');
let studentTableBody = document.getElementById('studentTableBody');
let studentCount = document.getElementById('studentCount');
let searchInput = document.getElementById('searchInput');
let filterDept = document.getElementById('filterDept');
let clearSearch = document.getElementById('clearSearch');
           
            ///////////////////////////////////////////
           // Part 2 – JavaScript Basics (20 Marks) //
          ///////////////////////////////////////////

studentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let studentname = document.getElementById('studentname').value;
  let age = document.getElementById('age').value;
  let email = document.getElementById('email').value;
  let genderInput = document.querySelector('input[name="gender"]:checked');
  let department = document.getElementById('department').value;
  let dob = document.getElementById('dob').value;
  let address = document.getElementById('address').value;
  let skillInputs = document.querySelectorAll('input[name="skills"]:checked');
  let skills = '';
  
  for (let i = 0; i < skillInputs.length; i++) {
    if (i > 0) {
      skills += ', ';
    }
    skills += skillInputs[i].value;
  }

                   // Task 1 Validations 

  if (!studentname) {
    alert('Please enter student name');
    return;
  }     

  if (!age || Number(age) <= 16) {
    alert('Age should be greater than 16');
    return;
  }

  if (!email || !email.includes('@')) {
    alert('Please enter a valid email');
    return;
  }

  if (!genderInput) {
    alert('Please select gender');
    return;
  }

  if (!department) {
    alert('Please select department');
    return;
  }

  if (skills.length === 0) {
    alert('Please select at least one skill');
    return;
  }

  let allStudents = manager.displayAllStudents();
  let nextId = allStudents.length > 0 ? allStudents[allStudents.length - 1].id + 1 : 1;

  let newStudent = new Student(nextId, studentname, age, email, genderInput.value, department, skills, dob, address);
  manager.addStudent(newStudent);
  
  showstudents(manager.displayAllStudents());
  studentForm.reset();
});

                  //  Task 3: Delete Function

function deleteStudent(id) {
  manager.deleteStudent(id);
  showstudents(manager.displayAllStudents());
}

                  // Task 3: Edit Function

function editStudent(id) {
  let allStudents = manager.displayAllStudents();
  let student = null;
  
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i].id === id) {
      student = allStudents[i];
      break;
    }
  }
  if (student === null) {
    return;
  }

  const newName = prompt('Enter new name:', student.name);
  if (newName === null) return;
  const newAge = prompt('Enter new age:', student.age);
  if (newAge === null) return;
  const newEmail = prompt('Enter new email:', student.email);
  if (newEmail === null) return;

  manager.updateStudent(id, newName || student.name, newAge || student.age, newEmail || student.email);
  showstudents(manager.displayAllStudents());
}
              ///////////////////////////////////////////
             // Part 4 – HTML + JavaScript (15 Marks) //
            ///////////////////////////////////////////

function applyFilters() {
  const q = searchInput.value;
  const dept = filterDept.value;
  const all = manager.displayAllStudents();
  const results = [];
  for (const s of all) {
    const nameMatch = true;
    const deptMatch = true;
    if (q !== '') {
      if (s.name.toLowerCase().indexOf(q) === -1) {
        nameMatch = false;
      }
    }
    if (dept !== '') {
      if (s.department !== dept) {
        deptMatch = false;
      }
    }
    if (nameMatch && deptMatch) {
      results.push(s);
    }
  }
  showstudents(results);
}

searchInput.addEventListener('input', applyFilters);
filterDept.addEventListener('change', applyFilters);
clearSearch.addEventListener('click', function() {
  searchInput.value = '';
  filterDept.value = '';
  applyFilters();
});
              
function showstudents(listToDisplay) {
  studentTableBody.innerHTML = '';

  for (let i = 0; i < listToDisplay.length; i++) {
    let student = listToDisplay[i];
    let row = document.createElement('tr');
    row.innerHTML =
      '<td>' + student.id + '</td>' +
      '<td>' + student.name + '</td>' +
      '<td>' + student.age + '</td>' +
      '<td>' + student.email + '</td>' +
      '<td>' + student.gender + '</td>' +
      '<td>' + student.department + '</td>' +
      '<td>' + student.skills + '</td>' +
      '<td>' + student.dob + '</td>' +
      '<td>' + student.address + '</td>' +
      '<td>' +
        '<button class="edit-btn" data-id="' + student.id + '">Edit</button>' +
        '<button class="delete-btn" data-id="' + student.id + '">Delete</button>' +
      '</td>';

    studentTableBody.appendChild(row);
    let editButton = row.querySelector('.edit-btn');
    let deleteButton = row.querySelector('.delete-btn');

    editButton.addEventListener('click', function() {
      let id = Number(this.getAttribute('data-id'));
      editStudent(id);
    });
    deleteButton.addEventListener('click', function() {
      let id = Number(this.getAttribute('data-id'));
      deleteStudent(id);
    });
  }

  studentCount.textContent = 'Total Students : ' + listToDisplay.length;
}

showstudents(manager.displayAllStudents());
let students = [];

function addstudent() {
    let student_name = document.getElementById('student_name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    let gender = document.querySelector('input[name="gender"]:checked');
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let department = document.getElementById('department').value;
    
    if(student_name == '') {
        alert('student name must be filled')
        return;
    }
    
    if(age<=16) {
        alert('age mest be greater than 16')
        return;
    }
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }
    if(skills.length === 0){
        alert('Atleast one skill must be selected')
        return;
    }

    let student = {  
        name:student_name,
        age:age,
        email:email,
        skills: skills,
        gender: gender,
        dateOfBirth: dob,
        address: address,
        department: department
    }
    students.push(student);
    console.log(students);
    displayStudents();
}

function displayStudents() {

    let tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";
     for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let row = tableBody.insertRow();

        let nameCell = row.insertCell(0);
        let ageCell = row.insertCell(1);
        let emailCell = row.insertCell(2);
        let genderCell = row.insertCell(3);
        let departmentCell = row.insertCell(4);
        let skillsCell = row.insertCell(5);
        let dobCell = row.insertCell(6);
        let addressCell = row.insertCell(7);
        let editCell = row.insertCell(8);
        let deleteCell = row.insertCell(9);
    }
     nameCell.innerHTML = student.name;
        ageCell.innerHTML = student.age;
        emailCell.innerHTML = student.email;
        genderCell.innerHTML = student.gender;
        departmentCell.innerHTML = student.department;
        skillsCell.innerHTML = student.skills;
        dobCell.innerHTML = student.dob;
        addressCell.innerHTML = student.address;

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";

        editButton.onclick = function () {
            editStudent(i);
        };

        editCell.appendChild(editButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        deleteButton.onclick = function () {
            deleteStudent(i);
        };

        deleteCell.appendChild(deleteButton);
    }


function deleteStudent(index) {

    students.splice(index, 1);
    displayStudents();

}

function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("email").value = student.email;

    if (student.gender == "male") {
        document.getElementById("male").checked = true;
    } else {
        document.getElementById("female").checked = true;
    }

    document.getElementById("department").value = student.department;

    document.getElementById("dob").value = student.dateOfBirth;

    document.getElementById("address").value = student.address;

    deleteStudent(index);
}






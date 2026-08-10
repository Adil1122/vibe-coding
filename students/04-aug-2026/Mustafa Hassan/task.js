let students = [];
let editIndex = -1;

function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let department = document.getElementById("department").value;
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;

    
    if (name === "") {
        alert("Name cannot be empty.");
        return false;
    }

    if (age === "") {
        alert("Age cannot be empty.");
        return false;
    }

    if (email === "") {
        alert("Email cannot be empty.");
        return false;
    }

    if (!gender) {
        alert("Please select gender.");
        return false;
    }

    let skillList = [];

    for (let i = 0; i < skills.length; i++) {
        skillList.push(skills[i].value);
    }

    
    let student = {
        name: name,
        age: age,
        email: email,
        gender: gender.value,
        department: department,
        skills: skillList.join(", "),
        dob: dob,
        address: address
    };

    if (editIndex === -1) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = -1;
    }

    displayStudents();

    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("address").value = "";

    document.querySelectorAll('input[name="gender"]').forEach(function (radio) {
        radio.checked = false;
    });

    document.querySelectorAll('input[name="skills"]').forEach(function (checkbox) {
        checkbox.checked = false;
    });

    return false;
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
}



function deleteStudent(index) {

    if (confirm("Are you sure you want to delete this student?")) {

        students.splice(index, 1);

        displayStudents();
    }
}



function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("email").value = student.email;

    
    if (student.gender === "male") {
        document.getElementById("male").checked = true;
    } else if (student.gender === "female") {
        document.getElementById("female").checked = true;
    }

    
    document.getElementById("department").value = student.department;

    
    document.getElementById("dob").value = student.dob;

    
    document.getElementById("address").value = student.address;


    document.querySelectorAll('input[name="skills"]').forEach(function (checkbox) {
        checkbox.checked = student.skills.includes(checkbox.value);
    });


    editIndex = index;
}
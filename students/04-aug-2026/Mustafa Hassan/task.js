let students = [];

function validateForm() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var department = document.getElementById("department").value;
    var skills = document.querySelectorAll('input[name="skills"]:checked');
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;

    if (name === "") {
        alert("Name cannot be empty.");
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

    students.push(student);

    displayStudents();

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

    document.getElementById("dob").value = student.dob;

    document.getElementById("address").value = student.address;

    deleteStudent(index);
}
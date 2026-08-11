function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let skills = document.querySelectorAll('input[name="feild"]:checked');

    if (name == "") {
        alert("Please enter a name");
        return;
    }
    
    if (age == "" || age < 16) {
        alert("Please enter a valid age");
        return;
    }

    
    if (skills.length == 0) {
        alert("Please select at least one feild");
        return;
    }

    return true;
}
function displayStudents() {
    let tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let row = tableBody.insertRow();

        let idCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let ageCell = row.insertCell(2);
        let departmentCell = row.insertCell(4);
        let deleteCell = row.insertCell(5);

        idCell.innerHTML = student.id;
        nameCell.innerHTML = student.name;
        ageCell.innerHTML = student.age;
        departmentCell.innerHTML = student.department;


        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        deleteButton.onclick = function() {
            deleteStudent(student.id);
        };

        deleteCell.appendChild(deleteButton);
    }
}


function deleteStudent(id) {

    if(confirm("Are you sure you want to delete student with ID " + id + "?")) {

        for (let i = 0; i < students.length; i++) {

            if (students[i].id == id) {

                students.splice(i, 1);
                break;
            }
        }
    }

    displayStudents();
}
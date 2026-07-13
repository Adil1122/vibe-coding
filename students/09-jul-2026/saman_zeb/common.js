let employees = [];
let editingEmployeeId = null;

function saveEmployee() {
    if (editingEmployeeId !== null) {
        updateEmployee();
    } else {
        addEmployee();
    }
}

function addEmployee() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (id === "" || name === "" || age === "") {
        alert("Please fill in all fields");
        return;
    }

    if (alreadyExists(id)) {
        alert("Employee with ID " + id + " already exists.");
        return;
    }

    let emp = { 
        id: id,
        name: name, 
        age: age };
    employees.push(emp);

    clearForm();
    displayEmployees();
}

function alreadyExists(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) return true;
    }
    return false;
}

function clearForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

function displayEmployees() {
    let tableBody = document.getElementById("employeeTableBody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {
        let emp = employees[i];
        let row = tableBody.insertRow();

        row.insertCell(0).innerHTML = emp.id;
        row.insertCell(1).innerHTML = emp.name;
        row.insertCell(2).innerHTML = emp.age;

        let actionCell = row.insertCell(3);

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.onclick = function () {
            editEmployee(emp.id);
        };
        actionCell.appendChild(editBtn);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.onclick = function () {
            deleteEmployee(emp.id);
        };
        actionCell.appendChild(deleteBtn);
    }
}

function editEmployee(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            document.getElementById("id").value = employees[i].id;
            document.getElementById("name").value = employees[i].name;
            document.getElementById("age").value = employees[i].age;
            editingEmployeeId = employees[i].id;
            break;
        }
    }
}

function updateEmployee() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == editingEmployeeId) {
            employees[i].name = name;
            employees[i].age = age;
            break;
        }
    }

    editingEmployeeId = null;
    clearForm();
    displayEmployees();
}

function deleteEmployee(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            employees.splice(i, 1);
            break;
        }
    }
    displayEmployees();
}
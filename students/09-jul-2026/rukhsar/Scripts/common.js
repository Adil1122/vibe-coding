let employees = [];

function addEmployee() {
    let id = document. getElementById("id").value;
    if (alreadyExists(id)) {
        alert("Employee with ID" + id + "already exists.");
        return;
    }

    let name = document.getElementByIdetById("name").value;
    let age = document.getElementById("age").value;

    let employee = {
        id: id,
        name: name,
        age: age,
    };
    employees.push(employee);
    console.log(employees);
    displayEmployees();

}

function alreadyExists(id) {
    for (let i=0; i < employees.length; i++) {
        if (employees[i].id == id) {
            return true;
        }
    }
    return false;

}

function displayEmployees() {
    let tableBody = document.getElementById("employeeTableBody");
    tableBody.innerHTML = "";

    for (let i=0; i < employees.length; i++) {
        let employee = employees[i];
        let row = tableBody.insertRow();
        let idCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let ageCell = row.insertCell(2);
        let deleteCell = row.insertCell(3);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        let updateCell = row.insertCell(4);
        let updateButton = document.createElement("button");
        updateButton.innerHTML = "Update";


         deleteButton.onclick = function() {
            deleteEmployee(employee.id);
        };
        deleteCell.appendChild(deleteButton);
        idCell.innerHTML = employee.id;
        nameCell.innerHTML = employee.name;
        ageCell.innerHTML = employee.age;


        updateButton.onclick = function() {
            updateEmployee(employee.id);
        };
        updateCell.appendChild(updateButton);
        idCell.innerHTML = employee.id;
        nameCell.innerHTML = employee.name;
        ageCell.innerHTML = employee.age; 

    }
}

function deleteEmployee(id) {
    if(confirm("Are you sure you want to delete employee with ID " + id + "?")) {
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id == id) {
                 employees.splice(i, 1);
                break;
            }
           displayEmployees(); 
        }
    }

function UpdateEmployee(id) {
    if(confirm("Are you sure you want to update employee with ID " + id + "?")) {
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id == id) {
               
                let newName = prompt("Enter new name:", employees[i].name);
                let newAge = prompt("Enter new age:", employees[i].age);
                break;
            }
        }
    }
     displayEmployees();
 }
}

    
    
let employees=[];

function addEmployee() {
    let id = document.getElementById("id").value;
    if(alreadyexists(id)) {
        alert("Employee with ID" + id +" already exists.")
        return;
    }
    let name = document.getElementbyId("name").value;
    let age = document.getElementById("age").value;
    
    let employee = {
        id: id,
        name: name,
        age: age,
    };
    employees. push(employee);
    console.log(employees);
    displayEmployees();
}

function alreadyexists(id) {
    for(let i=0; i<employees.length;i++) {
        if(employee[i].id==id) {
            return true;
        }
    }
    return false;
}
function displayEmployees() {
    let tableBody= document.getElementById("employeeTableBody");
    tableBody.innerHTML ="";

    for(let i=0;i<employee.length;i++) {
        let employee= employees[i];
        let row = tableBody.insertrow();
        let idCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let ageCell = row.insertCell(2);
        let deleteCell = row.insertCell(3);
        let updateCell = row.insertCell(4);

        let deletebutton = document.getElementbyId("button");
        deleteButton.innerHTML="Delete";

        deletebutton.onclick = function() {
            deleteEmployee(employee,id);
        }
        let updatebutton = document.getElementById("button");
        updatebutton.innerHTML="update";
    

        updatebutton.onclick = function() {
            updateEmployee(employee.id);
        }
        deleteCell.appendChild(deletebutton);
        updatecell.appendChild(updatebutton);
        idcell.innerHTML = employee.id;
        namecell.innerHTML = employee.name;
        ageCell.innerHTML = employee.age;
}
}
function updateEmployee(id)  {
 let newName = prompt("enter new name:");
 let newAge =prompt("enter new age:");
 for(i=0; i<employees.length; i++) {
    if(employee[i].id == id) {
        employees[i].name=newname;
        employees[i].age=newage;
        break;
    }
 }      
    displayEmployees();       
}
                  
function deleteEmployee(id) {
    if(confirm("are you sure you want to delete employee with id"+ id +"?")) {
        for(let i=0; i<employees.length;i++) {
            if (employee[1].id == id) {
                employees.splice(i, 1);
                break;
            }
    }
}
    displayEmployee();
}
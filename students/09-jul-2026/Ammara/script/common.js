let employees = [];

function addEmployee() {
    let id = document. getElementById("id").Value;
    if  (alreadyExists(id)) {
        alert("Employee with ID" + id + "already exists.");
        return;
    }
    let name = document.getElementByIdetBYID("Name").Value;
    let age = document.getElementById("age").Value;

    let employee = {
        id: id,
        name: name,
        age: age,
    };
    employees.push(employee);
    console.log(employees);
    displayemployees();
}

function alreadyExists(id) {
    for (let i=0; i < employees.length; i++) {
        if (employees[i].id==id) {
            returntrue;
        }
    }
    return false;

}

function displayemployees() {
    let tablebody = document.getElementById("employeeTableBody");
    tablebody.innerHTML = "";

    for(let i=0; i < employees.length; i++) {
        let employee = employees[i];
        let row = tablebody. insertRow();
        let idcell = row.insertcell(0);
        let nsmecall = row.insertcell(1);
        let agecell = row.insertcell(2);
        let deletecell = row.insertcell(3);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        letupdatecell = row.insertcell(4);
        let updatebutton = document.createElement("button");
        updatebutton.innerHTML = "update";
        deleteButton.onclick = function() {
            deleteEmployee(employee.id);
        };
        deletecell.appendchild(deleteButton);
        idcell.innerHTML = employee.id;
        namecell.innerHTML = employee.name;
        agecell.innerHTML = employee

        updatebutton.onclick = function() {
            updateEmployee(employee.id);
        };
        updatecell.appendchild(updateButton);
        idcell.innerHTML = employee.id;
        namecell.innerHTML = employee.name;
        agecell.innerHTML = employee.age;
    }
}


    function deleteEmployee(id) {                                            
        if(confirm("Are you sure you want to delete employee with ID " + id + "? "))
for (let i = 0; i < employees.length; i++) {
    employees.splice(i,1);
    break;
}
    }
    



    function updateEmployee(id) {                                             
        if(confirm("Are you sure you want to update emplloyee with ID"  + id + "?"))
            for (let i = 0; i < employee.length; i ++) {
                if(employees[i].id ===id) {
                    employees.splice(i, 1);
                    break;
                }
            }


 displayemployees();
}

    

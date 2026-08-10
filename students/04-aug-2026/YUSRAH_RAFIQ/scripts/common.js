let students = [];

function addstudent() {

    let student_name = document.getElementById('student_name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    let gender = document.querySelector('input[name="gender"]:checked');
    let department = document.getElementById('department').value;
    let dateOfBirth = document.getElementById('date of birth').value;
    let address = document.getElementById('address').value;

     if(student_name == "") {
        alert('student_name must be filled')
        return ; 
    }
    
      if(age <=16) {
        alert("age must be greater than 16.")
        return;
    }
    
     if(email==="" ||!email.includes("@")){
        alert("email should be valid.")
        return;
    }
    
      if(skills.length==0){
        alert("Atleast one skill must be selected.")
        return;
    }
    
    let student ={
        name: student_name,
        age: age,
        email: email,
        skills: skills,
        gender: gender,
        department: department,
        dateOfBirth: dateOfBirth,
        address: address
    }
}
    students.push(student);
    console.log(students);
     displayStudents();
     
    function displayStudents() {
        let tablebody= document.getElementById('studentTableBody');
        tablebody.innerHTML = '';

        for(let i=0; i<students.length; i++){
            let student = students[i];
            let row = tablebody.insertRow();
            let nameCell = row.insertCell(0);
            let ageCell = row.insertCell(1);
            let emailCell = row.insertCell(2);
            let skillsCell = row.insertCell(3);
            let genderCell = row.insertCell(4);
            let departmentCell = row.insertCell(5);
            let dateOfBirthCell = row.insertCell(6);
            let addressCell = row.insertCell(7);

        }
        let deletebutton = document.createElement('button');
        deletebutton.innerHTML = 'Delete';
        deletebutton.onclick = function() {
            deleteStudent(student.name);
        }
        let editbutton = document.createElement('button');
        editbutton.innerHTML = 'Edit';
        editbutton.onclick = function() {
            editStudent(student.name);
        }
        nameCell.innerHTML = student.name;
        ageCell.innerHTML = student.age;
        emailCell.innerHTML = student.email;
        skillsCell.innerHTML = student.skills;
        genderCell.innerHTML = student.gender;
        departmentCell.innerHTML = student.department;
        dateOfBirthCell.innerHTML = student.dateOfBirth;
        addressCell.innerHTML = student.address;
        deleteCell.appendChild(deletebutton);
        editCell.appendChild(editbutton);
    }
    function deleteStudent(name) {
        if(confirm("Are you sure you want to delete student with name " + name + "?")) {
            for (let i = 0; i < students.length; i++) {
                if (students[i].name == name) {
                    students.splice(i, 1);
                    break;
                }
            }
        }
    }
    function editStudent(name) {
        let newName = prompt("Enter new name:");
        let newAge = prompt("Enter new age:");
        let newEmail = prompt("Enter new email:");
        let newSkills = prompt("Enter new skills (comma-separated):").split(",");
        let newGender = prompt("Enter new gender:");
        for (let i = 0; i < students.length; i++) {
            if (students[i].name == name) {
                students[i].name = newName;
                students[i].age = newAge;
                students[i].email = newEmail;
                students[i].skills = newSkills;
                students[i].gender = newGender;
                break;
            }
        }
    }
    displayStudents();
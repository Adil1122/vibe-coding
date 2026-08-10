let students = [];

function addstudent() {
    let student_name = document.getElementById('student_name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    
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
        skills: skills
    }
    students.push(student);
    console.log(students);
    displaystudent();
}

function displaystudent() {
    alert('Student added successfully');
}





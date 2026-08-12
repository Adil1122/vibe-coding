function addStudent() {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let email = document.getElementById('email').value
    let skills = document.querySelectorAll('input[name="skills"]:checked')
    if(name === '') {
        alert('Please fill name field')
        return; 
    }
    
    if(age === '') {
        alert('please input he age')
        return;
    }
    if(email === '') {
        alert('please input the email')
        return;
    }
    if(skills.length === 0) {
        alert('please select at least one skill')
        return false;
    }
     alert('Student added successfully')
}
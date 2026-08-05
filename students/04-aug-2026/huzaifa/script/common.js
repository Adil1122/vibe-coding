let student = [];

function addstudent() {
    let student_name = document.getElementById('student_name').value;
    
    if(student_name == '') {
        alert('student name must be filled')
        return;
    }
    let age = document.getElementById('age').value;
    if(age<=16) {
        alert('age mest be greater than 16')
        return;
    }


}

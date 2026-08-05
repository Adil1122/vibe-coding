let students = [];

function addStudent() {
    let student_name = document.getElementById('student_name').value;

    if(student_name == '') {
        alert('student name must be filled')
        return; 
    }
    let age = document.getElementById('age').value;
    if(age<=16) {
        alert('age must be greater than  16')
       // return;
    }
    //let email = document.getElementById('email').value;
    //if(email=='not valid'){
       // alert('email should be valid')
        //return;
    //}
    //let skills = document.getElementById('skill').value;
    //if(skills==''){
       // alert('Atleast one skill must be selected')
       // return;
    //}//
//}
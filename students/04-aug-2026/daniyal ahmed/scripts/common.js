function validateform() {
     let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email= document.getElementById("email").value;
    let skill= document.getElementById("skill").value;
 }
  if (name==""){
 alert("name cannot br empty")
 return;
  }
  if (age==""){
    alert ("should be greater than 16")
    return;
  }
 if (email==""){
    alert ("enter a valid email")
    return;
 }
  if (skill=="") {
    alert ("At least one skill must be selected")
    return;

    return true;

  }
  

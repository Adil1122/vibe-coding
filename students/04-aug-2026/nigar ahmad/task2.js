 function validateform() {
     let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email= document.getElementById("email").value;
    let skill= document.getElementById("skill").value;
 }
  if (name == "") { 
    alert("Name cannot be empty");
     return; }
  
  
  if (age <= 16) {
     alert("Age should be greater than 16"); 
     return;}

 if (emailPattern.test(email)) {
   alert("Enter a valid email");
    return; }
 
  if (skill == "") {
     alert("At least one skill must be selected");
      return;
  }
  // If everything is valid studentdisplay(name, age, email, skill); }
 
  function studentdisplay (){
    let tablebody = document.getElementById("studentTablebody");
    tablebody.innerHTML =""
   let tablebody = document.getElementById("studentTablebody"); let row = tablebody.insertRow();
    row.insertCell(0).innerHTML = name;
     row.insertCell(1).innerHTML = age;
      row.insertCell(2).innerHTML = email; 
      row.insertCell(3).innerHTML = skill; 
  }
  
  
    
function validateForm() {
    let name = document.getElementById("studentname").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let skills = document.querySelectorAll('input[name="skills"]:checked');

    if (name == "") {
        alert("Please enter a name.");
        return;
    }

    if (age == "" || age < 16) {
        alert("Please enter a valid age.");
        return;
    }

    if (email == "" || !email.includes("@")) {
        alert("Please enter an email.");
        return;
    }

    if (skills.length == 0) {
        alert("Please select at least one skill.");
        return;
    }

    return true;
}
    function displaystudents() {
        let studentlist=document.getElementById("studentlist");
        studentlist.innerHTML="";

    }
      <td>studentname</td>
      
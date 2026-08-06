function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let skills = document.querySelectorAll('input[name="feild"]:checked');

    if (name == "") {
        alert("Please enter a name");
        return;
    }
    
    if (age == "" || age < 16) {
        alert("Please enter a valid age");
        return;
    }

    
    if (skills.length == 0) {
        alert("Please select at least one feild");
        return;
    }

    return true;
}

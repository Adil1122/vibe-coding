function validateForm() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var skills = document.querySelectorAll('input[name="skills"]:checked');

    if (name === "") {
        alert("Name cannot be empty.");
        return false;
    }

    if (age <= 16) {
        alert("Age should be greater than 16.");
        return false;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (skills.length === 0) {
        alert("Please select at least one skill.");
        return false;
    }

    return true;
}


















}
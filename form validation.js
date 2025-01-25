function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phone number").value;
    var maleChecked = document.getElementById("gender male").checked;
    var femaleChecked = document.getElementById("gender female").checked;

    var emailRegex = (/^\S+@\S+\.\S+$/);
    var passwordRegex = (/.\d{2,4}.\w{2,3}$/);

    if(username == "") {
        alert("Username must be filled out");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must have 2-4 digits and 2-3 characters");
        document.getElementById("password").focus(); 
        return false;
    }

    if (!maleChecked && !femaleChecked) {
        alert("Please select a gender");
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        document.getElementById("email").focus(); 
        return false; 
    }

    if(phonenumber == "") {
        alert("Phone number must be filled out");
        return false;
    }

    return true; 
}

document.getElementById("myform").addEventListener("submit", function(event) 
{
    if (!validateForm()) {
        event.preventDefault(); 
    }

});2
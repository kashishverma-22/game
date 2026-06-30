// ================= PASSWORD SHOW / HIDE =================

document.querySelectorAll(".togglePassword").forEach(icon => {

    icon.addEventListener("click", function () {

        const input = this.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        } else {
            input.type = "password";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
        }

    });

});


// ================= REGISTER FORM VALIDATION =================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const phone = document.getElementById("regPhone").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const confirmPassword = document.getElementById("regConfirmPassword").value.trim();
    const inviteCode = document.getElementById("inviteCode").value.trim();
    const agree = document.getElementById("agree");

    // Phone Validation
    if (phone === "") {
        alert("Please enter phone number");
        return;
    }

    if (phone.length < 10) {
        alert("Please enter valid phone number");
        return;
    }

    // Password Validation
    if (password === "") {
        alert("Please enter password");
        return;
    }

    if (password.length <= 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    // Confirm Password
    if (confirmPassword === "") {
        alert("Please confirm password");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Invite Code
    if (inviteCode === "") {
        alert("Please enter invite code");
        return;
    }

    // Agreement Checkbox
    if (!agree.checked) {
        alert("Please accept Privacy Agreement");
        return;
    }

    alert("Registration Successful!");

});

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    document.querySelectorAll(".error").forEach(err => {
        err.innerText = "";
    });

    let valid = true;

    const phone = document.getElementById("regPhone").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const confirmPassword = document.getElementById("regConfirmPassword").value.trim();
    const inviteCode = document.getElementById("inviteCode").value.trim();

    if(phone.length < 10){
        document.getElementById("phoneError").innerText =
            "Please enter a valid phone number";
        valid = false;
    }

    if(password.length < 8){
        document.getElementById("passwordError").innerText =
            "Password must be at least 8 characters";
        valid = false;
    }

    if(password !== confirmPassword){
        document.getElementById("confirmError").innerText =
            "Passwords do not match";
        valid = false;
    }

    if(inviteCode === ""){
        document.getElementById("inviteError").innerText =
            "Please enter invite code";
        valid = false;
    }

    if(!document.getElementById("agree").checked){
        document.getElementById("agreeError").innerText =
            "Please accept Privacy Agreement";
        valid = false;
    }

    // Sab sahi hone par
    if(valid){

        alert("Registration Successful");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";
    }

});
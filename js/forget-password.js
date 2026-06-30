// =====================
// TAB SWITCH
// =====================

const tabs = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".login-form");

tabs.forEach(tab => {
    tab.onclick = () => {

        tabs.forEach(t => t.classList.remove("active"));
        forms.forEach(f => f.classList.remove("active-form"));

        tab.classList.add("active");

        document.getElementById(tab.dataset.tab + "Form")
            .classList.add("active-form");
    };
});

// =====================
// PASSWORD SHOW / HIDE
// =====================

document.querySelectorAll(".togglePassword").forEach(icon => {

    icon.onclick = function () {

        let input = this.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            this.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            input.type = "password";
            this.classList.replace("fa-eye", "fa-eye-slash");
        }

    };

});

// =====================
// PHONE RESET VALIDATION
// =====================

document.getElementById("phoneForm").onsubmit = function (e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll("#phoneForm .error").forEach(x => x.innerHTML = "");

    let phone = document.getElementById("phone").value.trim();
    let pass = document.getElementById("newPassword").value.trim();
    let confirm = document.getElementById("confirmPassword").value.trim();
    let otp = document.getElementById("otp").value.trim();

    if (phone == "") {
        document.getElementById("phoneError").innerHTML = "Please enter phone number";
        valid = false;
    }
    else if (phone.length != 10) {
        document.getElementById("phoneError").innerHTML = "Phone number must be 10 digits";
        valid = false;
    }

    if (pass == "") {
        document.getElementById("newPasswordError").innerHTML = "Please enter password";
        valid = false;
    }

    if (confirm == "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please confirm password";
        valid = false;
    }
    else if (pass != confirm) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (otp == "") {
        document.getElementById("otpError").innerHTML = "Please enter OTP";
        valid = false;
    }

    if (!document.getElementById("agree").checked) {
        document.getElementById("agreeError").innerHTML = "Please accept Privacy Agreement";
        valid = false;
    }

    // if (valid) {
    //     alert("Phone Password Reset Successfully");
    // }

};

// =====================
// EMAIL RESET VALIDATION
// =====================

document.getElementById("emailForm").onsubmit = function (e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll("#emailForm .error").forEach(x => x.innerHTML = "");

    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("emailNewPassword").value.trim();
    let confirm = document.getElementById("emailConfirmPassword").value.trim();
    let otp = document.getElementById("emailOtp").value.trim();

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Please enter email";
        valid = false;
    }

    if (pass == "") {
        document.getElementById("emailNewPasswordError").innerHTML = "Please enter password";
        valid = false;
    }

    if (confirm == "") {
        document.getElementById("emailConfirmPasswordError").innerHTML = "Please confirm password";
        valid = false;
    }
    else if (pass != confirm) {
        document.getElementById("emailConfirmPasswordError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (otp == "") {
        document.getElementById("emailOtpError").innerHTML = "Please enter OTP";
        valid = false;
    }

    if (!document.getElementById("emailAgree").checked) {
        document.getElementById("emailAgreeError").innerHTML = "Please accept Privacy Agreement";
        valid = false;
    }

    // if (valid) {
    //     alert("Email Password Reset Successfully");
    // }

};

// =====================
// SEND OTP (60 SEC)
// =====================

document.querySelectorAll(".send-btn").forEach(btn => {

    btn.onclick = function () {

        let sec = 60;

        this.disabled = true;

        this.innerHTML = sec + "s";

        let timer = setInterval(() => {

            sec--;

            this.innerHTML = sec + "s";

            if (sec <= 0) {

                clearInterval(timer);

                this.disabled = false;

                this.innerHTML = "Send";

            }

        }, 1000);

    };

});
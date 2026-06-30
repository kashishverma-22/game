// ================= TAB SWITCH =================

const tabs = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".login-form");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        forms.forEach(f => f.classList.remove("active-form"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab + "Form")
            .classList.add("active-form");
    });

});


// ================= PASSWORD SHOW / HIDE =================

document.querySelectorAll(".togglePassword").forEach(icon => {

    icon.addEventListener("click", function () {

        let input = this.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            this.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            input.type = "password";
            this.classList.replace("fa-eye", "fa-eye-slash");
        }

    });

});


// ================= PHONE LOGIN =================

const phoneForm = document.getElementById("phoneForm");

phoneForm.addEventListener("submit", function (e) {

    e.preventDefault();

    document.querySelectorAll(".error").forEach(err => {
        err.innerText = "";
    });

    let valid = true;

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("phonePassword").value.trim();

    if (phone.length < 10) {

        document.getElementById("phoneError").innerText =
            "Please enter a valid phone number";

        valid = false;
    }

    if (password.length < 8) {

        document.getElementById("passwordError").innerText =
            "Password must be at least 8 characters";

        valid = false;
    }

    if (valid) {

        alert("Phone Login Success");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";
    }

});


// ================= EMAIL LOGIN =================

const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", function (e) {

    e.preventDefault();

    document.querySelectorAll(".error").forEach(err => {
        err.innerText = "";
    });

    let valid = true;

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("emailPassword").value.trim();

    if (!email.includes("@")) {

        document.getElementById("emailError").innerText =
            "Please enter a valid email";

        valid = false;
    }

    if (password.length < 8) {

        document.getElementById("emailPasswordError").innerText =
            "Password must be at least 8 characters";

        valid = false;
    }

    if (valid) {

        alert("Email Login Success");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";
    }

});
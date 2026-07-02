function openInvitation() {

    if (localStorage.getItem("isLoggedIn") === "true") {

        window.location.href = "invitation-bonus.html";

    } else {

        openPopup();

        // Ya agar popup nahi hai to login page bhej do
        // window.location.href = "login.html";
    }

}
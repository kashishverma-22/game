const buttons = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".lottery-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Active class
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        let filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});


// winner card 
const winnerCards = document.querySelector('.winner-cards');

setInterval(() => {

    const firstCard = winnerCards.firstElementChild;

    // Slide up effect
    firstCard.style.marginTop = '-90px';
    firstCard.style.opacity = '0';

    setTimeout(() => {
        firstCard.style.marginTop = '0';
        firstCard.style.opacity = '1';

        // First card ko last me bhej do
        winnerCards.appendChild(firstCard);

    }, 500);

}, 3000); // har 3 second me change


// footer
const footerLinks = document.querySelectorAll(".footer-item");

footerLinks.forEach(link => {

    link.addEventListener("click", function () {

        footerLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});

//section button
const gameLinks = document.querySelectorAll(".game-link");
const pages = document.querySelectorAll(".game-content");

gameLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        pages.forEach(page=>{
            page.style.display="none";
        });

        const pageId = this.dataset.page;

        document.getElementById(pageId).style.display="block";

        gameLinks.forEach(btn=>{
            btn.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// popup box
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// account

document.querySelector(".home-btn").addEventListener("click", function (e) {

    e.preventDefault();

    // Header show
    document.getElementById("mainHeader").style.display = "flex";

    // Home show
    document.getElementById("homePage").style.display = "block";

    // Account hide
    document.getElementById("accountPage").style.display = "none";

    // Footer active
    document.querySelectorAll(".footer-item").forEach(item => {
        item.classList.remove("active");
    });

    this.classList.add("active");
});


// ================= PAGE LOAD =================

window.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("isLoggedIn") === "true") {

        document.getElementById("homePage").style.display = "none";
        document.getElementById("accountPage").style.display = "block";

        // HEADER BHI HIDE KARO
        document.getElementById("mainHeader").style.display = "none";

        // Footer active
        document.querySelectorAll(".footer-item").forEach(item => {
            item.classList.remove("active");
        });

        document.querySelector(".account-btn").classList.add("active");
    }

    if (localStorage.getItem("isLoggedIn") === "true") {

        document.getElementById("activityLogged").style.display = "block";
        document.querySelector(".activity-guest").style.display = "none";

    } else {

        document.getElementById("activityLogged").style.display = "none";
        document.querySelector(".activity-guest").style.display = "block";
    }
});

// ================= ACCOUNT BUTTON =================

function checkLogin(e) {

    e.preventDefault();

    if (localStorage.getItem("isLoggedIn") !== "true") {

        openPopup();

    } else {

        // Home hide
        document.getElementById("homePage").style.display = "none";

        // Header hide
        document.getElementById("mainHeader").style.display = "none";

        // Account show
        document.getElementById("accountPage").style.display = "block";

        // Footer active
        document.querySelectorAll(".footer-item").forEach(item => {
            item.classList.remove("active");
        });

        document.querySelector(".account-btn").classList.add("active");
    }
}

// ================= LOGOUT =================

function logout() {

    localStorage.removeItem("isLoggedIn");

    // Home page wapas dikhao
    document.getElementById("homePage").style.display = "block";
    document.getElementById("accountPage").style.display = "none";

    // Footer reset
    document.querySelectorAll(".footer-item").forEach(item => {
        item.classList.remove("active");
    });

    window.location.reload();

}

// logout popup
function openLogoutPopup() {
    document.getElementById("logoutPopup").style.display = "flex";
}

function closeLogoutPopup() {
    document.getElementById("logoutPopup").style.display = "none";
}

function confirmLogout() {

    // Login remove
    localStorage.removeItem("isLoggedIn");

    // Popup close
    closeLogoutPopup();

    // Login page par bhejo
    window.location.href = "login.html";
}
function logout() {

    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("bonusShown");

    window.location.reload();
}

function openLogoutPopup() {
    document.getElementById("logoutPopup")
        .classList.add("show");
}

function closeLogoutPopup() {
    document.getElementById("logoutPopup")
        .classList.remove("show");
}

// activity page
document.querySelector(".activity-btn")
    .addEventListener("click", function (e) {

        e.preventDefault();

        document.getElementById("homePage").style.display = "none";
        document.getElementById("accountPage").style.display = "none";
        document.getElementById("activityPage").style.display = "block";

        document.getElementById("mainHeader").style.display = "none";
    });

document.querySelector(".home-btn")
    .addEventListener("click", function (e) {

        e.preventDefault();

        document.getElementById("homePage").style.display = "block";
        document.getElementById("activityPage").style.display = "none";
        document.getElementById("accountPage").style.display = "none";

        document.getElementById("mainHeader").style.display = "flex";
    });


// promotion page
document.querySelector(".promotion-btn").addEventListener("click", function (e) {

    e.preventDefault();

    // Main header hide
    document.getElementById("mainHeader").style.display = "none";

    // Sab pages hide
    document.querySelectorAll(".content-page").forEach(page => {
        page.style.display = "none";
    });

    // Promotion page show
    document.getElementById("promotionPage").style.display = "block";

    // Login check
    if (localStorage.getItem("isLoggedIn") === "true") {

        document.getElementById("promotionGuest").style.display = "none";
        document.getElementById("promotionUser").style.display = "block";

    } else {

        document.getElementById("promotionGuest").style.display = "block";
        document.getElementById("promotionUser").style.display = "none";
    }

    // Footer active
    document.querySelectorAll(".footer-item").forEach(item => {
        item.classList.remove("active");
    });

    this.classList.add("active");

});
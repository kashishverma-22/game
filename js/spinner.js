/*==================================
      PAGE LOAD
==================================*/

window.onload = function () {
    checkWheelPage();
};

/*==================================
      LOGIN / LOGOUT PAGE
==================================*/

function checkWheelPage() {

    const guest = document.getElementById("wheelGuest");
    const user = document.getElementById("wheelUser");

    if (!guest || !user) return;

    if (localStorage.getItem("isLoggedIn") === "true") {

        guest.style.display = "none";
        user.style.display = "block";

    } else {

        guest.style.display = "block";
        user.style.display = "none";

    }

}

/*==================================
      LOGIN
==================================*/

function loginSuccess() {

    localStorage.setItem("isLoggedIn", "true");
    location.reload();

}

/*==================================
      LOGOUT
==================================*/

function logout() {

    localStorage.removeItem("isLoggedIn");
    location.reload();

}

/*==================================
      GUEST POPUP
==================================*/

function openPopup() {

    const popup = document.getElementById("popup");

    if (popup)
        popup.style.display = "flex";

}

function closePopup() {

    const popup = document.getElementById("popup");

    if (popup)
        popup.style.display = "none";

}

/*==================================
      SPINNER
==================================*/

const wheel = document.getElementById("spinWheel");
const center = document.getElementById("spinCenter");

const spinText = document.getElementById("spinText");

const rewardPopup = document.getElementById("rewardPopup");
const rewardAmount = document.getElementById("rewardAmount");
const walletAmount = document.getElementById("walletAmount");

let spinning = false;
let freeSpin = 1;
let currentRotation = 0;

const rewards = [10, 38, 58, 98, 118, 158, 178, 198];

if (center) {

    center.onclick = function () {

        if (spinning) return;

        if (freeSpin <= 0) return;

        spinning = true;

        const reward =
            rewards[Math.floor(Math.random() * rewards.length)];

        const extraRotation =
            3600 + Math.floor(Math.random() * 360);

        currentRotation += extraRotation;

        wheel.style.transition = "transform 5s ease-out";
        wheel.style.transform =
            `rotate(${currentRotation}deg)`;

        setTimeout(function () {

            // X1 -> X0
            spinText.innerHTML = "X0";

            freeSpin = 0;

            // Wallet Update
            if (walletAmount) {

                let amount = parseFloat(
                    walletAmount.innerHTML.replace("₹", "")
                );

                amount += reward;

                walletAmount.innerHTML =
                    "₹" + amount.toFixed(2);

            }

            // Reward Amount
            rewardAmount.innerHTML = "₹" + reward;

            // Popup
            rewardPopup.style.display = "flex";

            spinning = false;

        }, 5000);

    };

}

/*==================================
      RESET ANGLE
==================================*/

wheel.addEventListener("transitionend", function () {

    currentRotation = currentRotation % 360;

    wheel.style.transition = "none";

    wheel.style.transform =
        `rotate(${currentRotation}deg)`;

});

/*==================================
      CLOSE POPUP
==================================*/

function closeReward() {

    rewardPopup.style.display = "none";

}


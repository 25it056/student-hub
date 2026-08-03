// ===============================
// StudentHub - script.js
// ===============================

// Welcome Message (only once per browser session)
window.addEventListener("load", function () {

    if (!sessionStorage.getItem("welcomeShown")) {

        alert("🎓 Welcome to StudentHub!");

        sessionStorage.setItem("welcomeShown", "true");
    }

});

// ===============================
// Register Form Validation
// ===============================

function validateRegister() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phone.match(phonePattern)) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Registration Successful!");

    return true;
}

// ===============================
// Login Validation
// ===============================

function validateLogin() {

    let username = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (username === "") {

        alert("Enter your Email or Enrollment Number.");

        return false;

    }

    if (password === "") {

        alert("Enter your Password.");

        return false;

    }

    alert("Login Successful!");

    return true;

}

// ===============================
// Contact Form
// ===============================

function sendMessage() {

    alert("Your message has been sent successfully.");

    return true;

}

// ===============================
// Feedback Form
// ===============================

function submitFeedback() {

    alert("⭐⭐⭐⭐⭐\n\nThank you for your feedback!");

    return true;

}

// ===============================
// Event Registration
// ===============================

function registerEvent(eventName) {

    alert("You have successfully registered for:\n\n" + eventName);

}

// ===============================
// Scroll To Top Button
// ===============================

let topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";
topButton.style.border = "none";
topButton.style.borderRadius = "10px";
topButton.style.background = "#6c5ce7";
topButton.style.color = "white";
topButton.style.fontSize = "18px";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 200) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Digital Clock
// ===============================

let clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "10px";
clock.style.right = "20px";
clock.style.background = "#6c5ce7";
clock.style.color = "white";
clock.style.padding = "8px 12px";
clock.style.borderRadius = "8px";
clock.style.fontWeight = "bold";

document.body.appendChild(clock);

function updateClock() {

    let now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

// ===============================
// Current Date
// ===============================

console.log("Today's Date : " + new Date().toDateString());

console.log("StudentHub Loaded Successfully");
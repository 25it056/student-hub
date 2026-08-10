document.addEventListener("DOMContentLoaded", function () {

    console.log("🎓 StudentHub loaded successfully!");

    // Scroll animation
    const cards = document.querySelectorAll(
        ".modern-card, .notice-item, .stat-box"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });


    cards.forEach(function (card) {

        card.classList.add("scroll-animation");

        observer.observe(card);

    });


    // Button click animation
    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .register-btn, .cta-button"
    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.add("button-click");

            setTimeout(function () {

                button.classList.remove("button-click");

            }, 200);

        });

    });


    // Dashboard mouse animation
    const dashboard = document.querySelector(".dashboard-preview");

    if (dashboard) {

        dashboard.addEventListener("mousemove", function (event) {

            const rect = dashboard.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -4;

            const rotateY =
                ((x / rect.width) - 0.5) * 4;

            dashboard.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        dashboard.addEventListener("mouseleave", function () {

            dashboard.style.transform =
                "perspective(800px) rotateX(0deg) rotateY(1deg)";

        });

    }


    // Current year
    const footerText = document.querySelector(
        ".footer-bottom p"
    );

    if (footerText) {

        footerText.innerHTML =
            "© " +
            new Date().getFullYear() +
            " StudentHub. All Rights Reserved.";

    }

});
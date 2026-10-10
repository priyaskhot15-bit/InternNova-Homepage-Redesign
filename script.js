document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Reveal sections when they enter the screen
    const revealItems = document.querySelectorAll(
        ".feature-card, .program-card, .section h2, .section-text"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealItems.forEach(function (item) {
            item.classList.add("reveal");
            observer.observe(item);
        });
    } else {
        revealItems.forEach(function (item) {
            item.classList.add("visible");
        });
    }

    // Update the footer year automatically
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Show a welcome message when the main CTA is clicked
    const joinButton = document.querySelector("#join-us");

    if (joinButton) {
        joinButton.addEventListener("click", function () {
            alert("Thank you for your interest in InternNova! Please visit the official website for current internship opportunities.");
        });
    }
});
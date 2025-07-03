// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.setAttribute("data-theme", savedTheme);
        if (savedTheme === "dark") {
            themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
        } else {
            themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
        }
    }

    // Theme toggle functionality
    themeToggle.addEventListener("click", () => {
        if (body.getAttribute("data-theme") === "dark") {
            body.removeAttribute("data-theme");
            themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        } else {
            body.setAttribute("data-theme", "dark");
            themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        }
    });

    // Hamburger menu functionality
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close hamburger menu when a nav link is clicked
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const submitBtn = document.getElementById("submitBtn");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Basic form validation
            let isValid = true;
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");

            // Clear previous errors
            nameError.style.display = "none";
            emailError.style.display = "none";
            messageError.style.display = "none";

            if (nameInput.value.trim() === "") {
                nameError.textContent = "Full Name is required.";
                nameError.style.display = "block";
                isValid = false;
            }

            if (emailInput.value.trim() === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
                emailError.textContent = "A valid Email Address is required.";
                emailError.style.display = "block";
                isValid = false;
            }

            if (messageInput.value.trim() === "") {
                messageError.textContent = "Message is required.";
                messageError.style.display = "block";
                isValid = false;
            }

            if (!isValid) {
                return; // Stop if validation fails
            }

            submitBtn.disabled = true;
            submitBtn.innerHTML = 
                `<i class="fas fa-spinner fa-spin"></i> Sending...`;

            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                subject: document.getElementById("subject").value,
                message: messageInput.value,
            };

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    contactForm.style.display = "none";
                    successMessage.style.display = "block";
                    contactForm.reset(); // Clear form fields
                } else {
                    const errorData = await response.json();
                    alert(`Error sending message: ${errorData.message || response.statusText}`);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An unexpected error occurred. Please try again later.");
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 
                    `<i class="fas fa-paper-plane"></i> Send Message`;
            }
        });
    }
});



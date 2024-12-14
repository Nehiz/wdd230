document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const passwordError = document.getElementById("password-error");
    const emailInput = document.getElementById("email");
    const ratingInput = document.getElementById("rating");
    const ratingValue = document.getElementById("rating-value");

    // Validate password confirmation
    form.addEventListener("submit", (event) => {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;

        // Check if password matches the pattern
        const passwordPattern = /^[a-zA-Z0-9]{8,}$/;
        if (!passwordPattern.test(passwordValue)) {
            event.preventDefault();
            passwordError.textContent = "Password must be at least 8 alphanumeric characters.";
            password.value = "";
            confirmPassword.value = "";
            password.focus();
            return;
        }

        // Check if passwords match
        if (passwordValue !== confirmPasswordValue) {
            event.preventDefault();
            passwordError.textContent = "Passwords do not match. Try again.";
            password.value = "";
            confirmPassword.value = "";
            password.focus();
        } else {
            passwordError.textContent = ""; // Clear error message
        }
    });

    // Email validation on input
    emailInput.addEventListener("input", () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity("Please enter a valid byui.edu email address.");
        } else {
            emailInput.setCustomValidity("");
        }
    });

    // Update rating value display
    ratingInput.addEventListener("input", () => {
        ratingValue.textContent = ratingInput.value;
    });
});

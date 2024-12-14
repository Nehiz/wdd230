// Confirm Password Validation
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Passwords do not match!";
        confirmPassword.setCustomValidity("Passwords do not match!");
    } else {
        passwordError.textContent = "";
        confirmPassword.setCustomValidity("");
    }
});

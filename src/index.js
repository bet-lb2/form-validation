import "./styles.css";

const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const submitBtn = document.getElementById("submit-btn");

email.addEventListener("input", () => {
    email.setCustomValidity("");
    if (!email.validity.valid) {
        email.setCustomValidity("Enter valid email address.")
    }
    if (email.validity.valueMissing) {
        email.setCustomValidity("Enter your email.");
    }
})

country.addEventListener("input", () => {
    country.setCustomValidity("");
    if (!country.validity.valid) {
        country.setCustomValidity("Enter valid country name.");
    }
    if (country.validity.valueMissing) {
        country.setCustomValidity("Enter your country name.");
    }
})

postalCode.addEventListener("input", () => {
    postalCode.setCustomValidity("");
    if (!postalCode.validity.valid) {
        postalCode.setCustomValidity("Enter valid postal code.");
    }
    if (postalCode.validity.valueMissing) {
        postalCode.setCustomValidity("Enter your postal code.");
    }
})

password.addEventListener("input", () => {
    password.setCustomValidity("");
    if (!password.validity.valid) {
        password.setCustomValidity("Enter valid password.");
    }
    if (password.validity.valueMissing) {
        password.setCustomValidity("Enter your password.");
    }
})

passwordConfirmation.addEventListener("input", () => {
    passwordConfirmation.setCustomValidity("");
    if (passwordConfirmation.value !== password.value) {
        passwordConfirmation.setCustomValidity("Passwords don't match. Enter your password again.")
    }
    if (!passwordConfirmation.validity.valid) {
        passwordConfirmation.setCustomValidity("Enter valid password again.");
    }
    if (passwordConfirmation.validity.valueMissing) {
        passwordConfirmation.setCustomValidity("Enter your password again.")
    }
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!email.reportValidity()) {
        email.reportValidity();
        return;
    }
    if (!country.reportValidity()) {
        country.reportValidity();
        return;
    }
    if (!postalCode.reportValidity()) {
        postalCode.reportValidity();
        return;
    }
    if (!password.reportValidity()) {
        password.reportValidity();
        return;
    }
    if (!passwordConfirmation.reportValidity()) {
        passwordConfirmation.reportValidity();
    }
})
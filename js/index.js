"use strict";

const form = document.querySelector(".hero__form");
const emailInput = document.querySelector("#email");
const error = document.querySelector(".hero__error");

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError() {
    emailInput.classList.add("input--error");
    emailInput.setAttribute("aria-invalid", true);
    error.classList.remove("hide");
}

function hideError() {
    emailInput.classList.remove("input--error");
    emailInput.removeAttribute("aria-invalid");
    error.classList.add("hide");
}

function handleSubmit(e) {
    e.preventDefault();
    const inputValue = emailInput.value.trim();
    if (inputValue && isValidEmail(inputValue)) {
        emailInput.value = '';
        hideError();
        return;
    }
    showError();
}

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", hideError);
"use strict";

const form = document.querySelector(".hero__form");
const email = document.querySelector("#email");
const error = document.querySelector(".hero__error");

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError() {
    email.classList.add("input--error");
    email.setAttribute("aria-invalid", true);
    error.classList.remove("hide");
}

function hideError() {
    email.classList.remove("input--error");
    email.removeAttribute("aria-invalid");
    error.classList.add("hide");
}

function handleSubmit(e) {
    e.preventDefault();
    const inputValue = email.value.trim();
    if (inputValue && isValidEmail(inputValue)) {
        email.value = '';
        hideError();
        return;
    }
    showError();
}

form.addEventListener("submit", handleSubmit);
email.addEventListener("input", hideError);
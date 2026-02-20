const modal = document.getElementById("demoModal");
const form = document.getElementById("demoForm");

function openForm() {
    modal.style.display = "flex";
}

function closeForm() {
    modal.style.display = "none";
    form.reset();
    clearErrors();
}

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

function clearErrors() {
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !phone || !email) {
        const msg = "Form incomplete. Please fill all the details.";

        if (!name) nameError.textContent = msg;
        if (!phone) phoneError.textContent = msg;
        if (!email) emailError.textContent = msg;

        return; 
    }

    let isValid = true;

    if (name.length < 3) {
        nameError.textContent = "Minimum 3 letters required";
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Contact number must be exactly 10 digits";
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        closeForm();
    }
});

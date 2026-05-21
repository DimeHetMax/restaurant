const form = document.getElementById("reservation_form");

const peopleInput = document.getElementById("people");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const errorMessage = document.getElementById("error_message");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    errorMessage.textContent = "";

    

    if (
        peopleInput.value === "" ||
        dateInput.value === "" ||
        timeInput.value === "" ||
        fullnameInput.value === "" ||
        emailInput.value === "" ||
        phoneInput.value === ""
    ) {
        errorMessage.textContent = "please fill all fields";
        console.log("pppppp");
        
        return;
    }


    if (peopleInput.value <= 0 || peopleInput.value > 12) {
        errorMessage.textContent = "number of people is invalid choose from 1-12";
        return;
    }


    if (!emailInput.value.includes("@")) {
        errorMessage.textContent = "invalid email";
        return;
    }


    if (phoneInput.value.length < 7) {
        errorMessage.textContent = "invalid phone number";
        return;
    }


    /* ===== SUCCESS ===== */

    window.location.href = "success.html";

});
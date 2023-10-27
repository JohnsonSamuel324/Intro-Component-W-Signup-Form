const regex = /^([a-zA-Z0-9])+@([a-zA-Z])+.([a-z]+)(.[a-z]+)?$/;

const imgErrors = document.getElementsByClassName("img-error");
const textErrors = document.getElementsByClassName("text-error");
const fName = document.getElementById("input-fName");
const fNameImg = document.getElementById("fname-img-error");
const fNameText = document.getElementById("fname-text-error");
const lName = document.getElementById("input-lName");
const lNameImg = document.getElementById("lname-img-error");
const lNameText = document.getElementById("lname-text-error");
const email = document.getElementById("input-email");
const emailImg = document.getElementById("email-img-error");
const emailText = document.getElementById("email-text-error");
const pwd = document.getElementById("input-pwd");
const pwdImg = document.getElementById("pwd-img-error");
const pwdText = document.getElementById("pwd-text-error");

function submitSignup() {
    if (fName.value.length === 0) {
        fName.placeholder = "";
        fName.style.borderColor = "hsl(0, 100%, 74%)";
        fNameImg.style.display = "block"
        fNameText.style.display = "block"
    }
    if (lName.value.length === 0) {
        lName.placeholder = ""
        lName.style.borderColor = "hsl(0, 100%, 74%)";
        lNameImg.style.display = "block";
        lNameText.style.display = "block";
    }
    if ((email.value.length === 0) || (!email.value.match(regex))) {
        email.placeholder = "email@example/com"
        email.style.borderColor = "hsl(0, 100%, 74%)";
        email.classList.add("error");
        emailImg.style.display = "block";
        emailText.style.display = "block";
    }
    if (pwd.value.length === 0) {
        pwd.placeholder = ""
        pwd.style.borderColor = "hsl(0, 100%, 74%)";
        pwdImg.style.display = "block";
        pwdText.style.display = "block";
    }
}

function resetErrors(inputField, errorImg, errorText) {
    document.getElementById(inputField).style.borderColor = "#dedede";
    document.getElementById(errorImg).style.display = "none";
    document.getElementById(errorText).style.display = "none";
}
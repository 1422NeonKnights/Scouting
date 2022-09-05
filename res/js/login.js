const username = "frc1422"
const password = "neonknightsrock"

var autologin = true;

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function clearUsrnameInput(){
    document.querySelector(".form__input-username").value = "";
}

function clearPasswordInput(){
    document.querySelector(".form__input-password").value= "";
}

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
  
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function(){
    if(getCookie("autologin") != ""){
        location.href = "utility.html";
    }
});

document.querySelector(".form__button").addEventListener("click", e => {
    e.preventDefault();
    const usrnameInput = document.querySelector(".form__input-username").value;
    const passwordInput = document.querySelector(".form__input-password").value;

    if(usrnameInput == username && passwordInput == password){
        document.cookie = "autologin=true;";
        location.href = "utility.html";
    }else{
        setFormMessage(document, "error",  "Incorrect username/password");
        clearUsrnameInput();
        clearPasswordInput();
    }
});

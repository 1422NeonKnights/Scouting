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

document.querySelector(".form__button").addEventListener("click", e => {
    e.preventDefault();
    const usrnameInput = document.querySelector(".form__input-username").value;
    const passwordInput = document.querySelector(".form__input-password").value;

    if(usrnameInput == "frc1422" && passwordInput == "neonknightsrock"){
        location.href = "utility.html";
    }else{
        setFormMessage(document, "error",  "Incorrect username/password");
        clearUsrnameInput();
        clearPasswordInput();
    }
});

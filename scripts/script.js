let profileIcon = document.querySelector(".profile__button-edit");
let formClose = document.querySelector(".popup__button-close");
let popupOpened = document.querySelector(".popup_opened");

function editProfile() {
    popupOpened.style.display = "flex";
}

function popupClose() {
    popupOpened.style.display = "none";
}

profileIcon.addEventListener("click", editProfile);
formClose.addEventListener("click", popupClose);

let formElement = document.querySelector(".form");
let inputName = document.querySelector(".form__input-name");
let inputJob = document.querySelector(".form__input-job");

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupOpened.style.display = "none";
}

formElement.addEventListener("submit", formSubmitHandler);
let buttonSave = document.querySelector(".form__button-save");
buttonSave.addEventListener("click", formSubmitHandler);

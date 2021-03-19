let openEditFormButton = document.querySelector(".profile__button-edit");
let closeEditFormButton = document.querySelector(".popup__button-close");
let popupEdit = document.querySelector(".popup");
let formElement = document.querySelector(".form");
let inputName = document.querySelector(".form__input_name");
let inputJob = document.querySelector(".form__input_job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let buttonSave = document.querySelector(".form__button-save");

function openPopap() {
    popupEdit.classList.add('popup_opened')
}

function popupClose() {
    popupEdit.classList.remove('popup_opened')
}

openEditFormButton.addEventListener("click", openPopap);
closeEditFormButton.addEventListener("click", popupClose);

function HandlerProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClose()
}

formElement.addEventListener("submit", HandlerProfileSubmit);




let openEditFormButton = document.querySelector('.profile__button-edit');
let closeEditFormButton = document.querySelector('.popup__button-close');
let popupEdit = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function openPopup() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupEdit.classList.add('popup_opened');
}

function closePopup() {
    popupEdit.classList.remove('popup_opened');
}

function handlerProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup();
}

openEditFormButton.addEventListener('click', openPopup);
closeEditFormButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handlerProfileSubmit);




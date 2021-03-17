let profileIcon = document.querySelector('.profile__button-edit')
let formClose = document.querySelector('.popup__button-close');
let popupHidden = document.querySelector('.popup__hidden')

function editProfile() {
    popupHidden.style.visibility = 'visible';
}

function popupClose() {
    popupHidden.style.visibility = 'hidden';
}

profileIcon.addEventListener('click', editProfile);
formClose.addEventListener('click', popupClose);

let formElement = document.querySelector('.form')
let inputName = document.querySelector('.form__input-name')
let inputJob = document.querySelector('.form__input-job')

let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupHidden.style.visibility = 'hidden';
}

formElement.addEventListener('submit', formSubmitHandler);

let buttonSave = document.querySelector('.form__button-save')

buttonSave.addEventListener('click', formSubmitHandler);

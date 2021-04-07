const openEditFormButton = document.querySelector('.profile__button-edit');
const popupCloseEditBtn = document.querySelector('.popup__close');
const popupCloseCardsBtn = document.querySelector('.popup__close_type_cards')
const popupEditProfile = document.querySelector('.popup_type_edit');
const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardForm = document.querySelector('.popup__form_type_card')
const popupImage = document.querySelector('.popup_type_image');
const popupImageBtnClose = document.querySelector('.popup__close_type_image');
const nameInputCard = document.querySelector('.popup__input_type_name-card');
const linkInputCard = document.querySelector('.popup__input_type_link');
const popupCreateCard = document.querySelector('.popup_type_new-card');
const buttonCreateCard = document.querySelector('.profile__button-add');
const cardList = document.querySelector('.cards__list');
const templateCards = document.querySelector('#card-template').content.querySelector('.card');

function editPopup() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function openPopup(open) {
    open.classList.add('popup-opened')
}

function closePopup(close) {
    close.classList.remove('popup-opened');
}

function handlerProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

// создание новой карточки

function createCard(nameCard, linkCard) {
    const templateElement = templateCards.cloneNode(true);
    const templateCardsTitle = templateElement.querySelector('.card__title').textContent = nameCard;
    const templateCardImage = templateElement.querySelector('.card__image');
    const btnLike = templateElement.querySelector('.card__button-like')
    templateCardImage.setAttribute('src', linkCard);
    btnLike.addEventListener('click', handleLikeCard);
    // удаление карточки
    const cardDelete = templateElement.querySelector('.card__button-delete')
    cardDelete.addEventListener('click', handleDeleteCard);
    // открытие картинки в отдельном окне
    const cardImage = templateElement.querySelector('.card__image');
    const popupOpenImage = document.querySelector('.popup__image');
    const popupImageSignature = document.querySelector('.popup__caption');
    const popupCardTitle = templateElement.querySelector('.card__title');
    templateCardImage.setAttribute('alt', nameCard);
    cardImage.addEventListener('click', () => {
        popupOpenImage.src = cardImage.src
        popupImageSignature.textContent = popupCardTitle.textContent;
        openPopup(popupImage)

    });
    return templateElement
}


// реализация лайка
function handleLikeCard(evt) {
    evt.target.classList.toggle('like-active')
}

// удаление карточки
function handleDeleteCard() {
    const card = document.querySelector('.card')
    card.remove()
}

// добавление карточки
function addCartInList(nameCard, linkCard) {
    const templateElement = createCard(nameCard, linkCard);
    cardList.prepend(templateElement)
}

// closePopup
popupCloseEditBtn.addEventListener('click', () => closePopup(popupEditProfile));
popupCloseCardsBtn.addEventListener('click', () => closePopup(popupCreateCard));
//openPopup
buttonCreateCard.addEventListener('click', () => openPopup(popupCreateCard));
openEditFormButton.addEventListener('click', () => {
    editPopup()
    openPopup(popupEditProfile);
});
//submit
cardForm.addEventListener('submit', evt => {
    handlerCardSubmit(evt)
    cardForm.reset()
    closePopup(popupCreateCard)
});
formElement.addEventListener('submit', evt => {
    handlerProfileSubmit(evt)
    closePopup(popupEditProfile);
});

popupImageBtnClose.addEventListener('click', () => {
    closePopup(popupImage)
})

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

const initialCards = [
    {
        name: 'Pulau Ubin',
        link: 'https://images.unsplash.com/photo-1617015606776-c54fd56b69b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        alt: ''
    },
    {
        name: 'Portovenere',
        link: 'https://images.unsplash.com/photo-1617102888614-ae5c7c90d7eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        alt: ''
    },
    {
        name: 'Takayama',
        link: 'https://images.unsplash.com/photo-1616666720355-03ce7f70b237?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        alt: ''
    },
    {
        name: 'Ortygia',
        link: 'https://images.unsplash.com/photo-1612361814394-35785ba16dc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80',
        alt: ''
    },
    {
        name: 'Novara di Sicilia',
        link: 'https://images.unsplash.com/photo-1612361808300-da9583e1b34e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80',
        alt: ''
    },
    {
        name: 'Gíza',
        link: 'https://images.unsplash.com/photo-1590133324192-1df305deea6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80',
        alt: ''
    }
];

initialCards.forEach(addCartInList);

function handlerCardSubmit(evt) {
    evt.preventDefault();
    const card = {
        name: nameInputCard.value,
        link: linkInputCard.value
    }
    addCartInList(card)
    cardForm.reset()
    closePopup(popupCreateCard)
}

function editPopup() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    openPopup(popupEditProfile);
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
    closePopup(popupEditProfile);
}

// создание новой карточки

function createCard(card) {
    const templateElement = templateCards.cloneNode(true);
    templateElement.querySelector('.card__title').textContent = card.name;
    const templateCardImage = templateElement.querySelector('.card__image');
    const btnLike = templateElement.querySelector('.card__button-like')
    const popupCardTitle = templateElement.querySelector('.card__title');
    const cardDelete = templateElement.querySelector('.card__button-delete')
    templateCardImage.setAttribute('src', card.link);
    btnLike.addEventListener('click', handleLikeCard);
    cardDelete.addEventListener('click', handleDeleteCard);
    templateCardImage.alt = card.name;
    templateCardImage.addEventListener('click', evt => { listenerCardImage(evt,popupCardTitle)});
    return templateElement
}

function listenerCardImage(evt, popupCardTitle) {
    const popupOpenImage = document.querySelector('.popup__image');
    const popupImageSignature = document.querySelector('.popup__caption');
    popupOpenImage.src = evt.target.src;
    popupOpenImage.alt = popupCardTitle;
    popupImageSignature.textContent = popupCardTitle.textContent;
    openPopup(popupImage);
}


// реализация лайка
function handleLikeCard(evt) {
    evt.target.classList.toggle('like-active')
}

// удаление карточки
function handleDeleteCard(evt) {
    evt.target.closest('.card').remove()
}

// добавление карточки
function addCartInList(card) {
    const templateElement = createCard(card);
    cardList.prepend(templateElement)

}

// closePopup
popupCloseEditBtn.addEventListener('click', () => closePopup(popupEditProfile));
popupCloseCardsBtn.addEventListener('click', () => closePopup(popupCreateCard));
popupImageBtnClose.addEventListener('click', () => closePopup(popupImage));
//openPopup
buttonCreateCard.addEventListener('click', () => openPopup(popupCreateCard));

//submit
cardForm.addEventListener('submit', handlerCardSubmit);
formElement.addEventListener('submit', handlerProfileSubmit);
openEditFormButton.addEventListener('click', editPopup);

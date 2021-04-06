let openEditFormButton = document.querySelector('.profile__button-edit');
let closeEditFormButton = document.querySelector('.popup__button-close');
let closeEditCardButton = document.querySelector('.popup-create-card-close');
let popupEditProfile = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

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

openEditFormButton.addEventListener('click', editPopup);
closeEditFormButton.addEventListener('click', () => closePopup(popupEditProfile));
closeEditCardButton.addEventListener('click', () => closePopup(popupCreateCard));
formElement.addEventListener('submit', handlerProfileSubmit);


// массив карточек

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


const cardList = document.querySelector('.cards__list');
initialCards.forEach(item => {
    addCartInList(item.name, item.link)
});

// открытие модального окна создания карточки

const popupCreateCard = document.querySelector('.popup_create-card');
const buttonCreateCard = document.querySelector('.profile__button-add');


buttonCreateCard.addEventListener('click', () => openPopup(popupCreateCard));

// создание новой карточки

const nameInputCard = document.querySelector('.popup__input_type_name-card');
const linkInputCard = document.querySelector('.popup__input_type_link');
const createCardBtn = document.querySelector('.popup__button_create-card');

function handlerCardSubmit(evt) {
    evt.preventDefault();
    const name = nameInputCard.value
    const link = linkInputCard.value
    addCartInList(name, link)
    closePopup(popupCreateCard)
}

function createCard(nameCard, linkCard) {
    const templateCards = document.querySelector('#card-template').content.querySelector('.card');
    const templateElement = templateCards.cloneNode(true);
    const templateCardsTitle = templateElement.querySelector('.card__title');
    const templateCardImage = templateElement.querySelector('.card__image');
    templateCardImage.alt = templateCardsTitle.textContent;
    templateCardsTitle.textContent = nameCard;
    templateCardImage.src = linkCard;
// реализация лайка
    templateElement.querySelector('.card__button-like').addEventListener('click', evt => {
        evt.target.classList.toggle('like-active')
    });
// удаление карточки
    const deleteCard = templateElement.querySelector('.card__button-delete');
    deleteCard.addEventListener('click', () => templateElement.remove());
// открытие картинки в отдельном окне
    const popupImage = document.querySelector('.popup-image');
    const cardImage = templateElement.querySelector('.card__image');
    const popupOpenImage = document.querySelector('.popup-image__image');
    const popupImageBtnClose = document.querySelector('.popup-image-close');
    const popupImageSignature = document.querySelector('.popup-image__signature');
    const popupCardTitle = templateElement.querySelector('.card__title');
    cardImage.addEventListener('click', () => {
        popupOpenImage.src = cardImage.src
        popupImageSignature.textContent = popupCardTitle.textContent;
        openPopup(popupImage)
    });
    popupImageBtnClose.addEventListener('click', () => {
        closePopup(popupImage)
    })

    return templateElement
}

// добавление карточки
function addCartInList(nameCard, linkCard) {
    const templateElement = createCard(nameCard, linkCard);
    cardList.prepend(templateElement)
}

createCardBtn.addEventListener('click', handlerCardSubmit);






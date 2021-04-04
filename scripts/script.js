let openEditFormButton = document.querySelector('.profile__button-edit');
let closeEditFormButton = document.querySelector('.popup__button-close');
let closeEditCardButton = document.querySelector('.popup__button-close_card');
let popupEdit = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function openPopup1() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    openPopup(popupEdit);
}

function openPopup(open) {
    open.classList.add('popup_opened')
}

function closePopup(close) {
    close.classList.remove('popup_opened');

}

function handlerProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(popupEdit);
}

openEditFormButton.addEventListener('click', openPopup1);
closeEditFormButton.addEventListener('click', function (){closePopup(popupEdit)});
closeEditCardButton.addEventListener('click', function (){closePopup(popupCreateCard)});
formElement.addEventListener('submit', handlerProfileSubmit);


// массив карточек

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://images.unsplash.com/photo-1598650920441-101c71fe561c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
    },
    {
        name: 'Челябинская область',
        link: 'https://images.unsplash.com/photo-1598650920441-101c71fe561c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
    },
    {
        name: 'Иваново',
        link: 'https://images.unsplash.com/photo-1598650920441-101c71fe561c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
    },
    {
        name: 'Камчатка',
        link: 'https://images.unsplash.com/photo-1598650920441-101c71fe561c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
    },
    {
        name: 'Холмогорский район',
        link: 'https://images.unsplash.com/photo-1598650920441-101c71fe561c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1598650920441-101c71fe561c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
    }
];


const cardList = document.querySelector('.cards__list');
initialCards.forEach(item => {
    // const templateCards = document.querySelector('#list-template').content.querySelector('.card')
    // const templateElement = templateCards.cloneNode(true);
    // const templateCardsTitle = templateElement.querySelector('.card__title')
    // const templateCardsImage = templateElement.querySelector('.card__image')
    // templateCardsTitle.textContent = item.name;
    // templateCardsImage.src = item.link;
    // cardList.append(templateElement)
    addCartInList(item.name,item.link)
})

// открытие модального окна создания карточки

const popupCreateCard = document.querySelector('.popup_create-card')
const buttonCreateCard = document.querySelector('.profile__button-add');



buttonCreateCard.addEventListener('click', function (){openPopup(popupCreateCard)})

// создание новой карточки
const list = document.querySelector('.cards__list')
const cardName = document.querySelector('.popup__input_type_name-card')
const imageLink = document.querySelector('.popup__input_type_link')
const CardsTitle = document.querySelector('.card__title')
const CardsImage = document.querySelector('.card__image').src;
const btn = document.querySelector('.popup__button_create-card')

function handlerCardSubmit(evt) {
    evt.preventDefault();
    const name = cardName.value
    const link = imageLink.value
    addCartInList(name,link)
    console.log(popupCreateCard)
    closePopup(popupCreateCard)
}

function addCartInList(nameCard,linkCard) {
    const templateCards = document.querySelector('#card-template').content.querySelector('.card')
    const templateElement = templateCards.cloneNode(true);
    const templateCardsTitle = templateElement.querySelector('.card__title')
    const templateCardsImage = templateElement.querySelector('.card__image')
    templateCardsTitle.textContent = nameCard;
    templateCardsImage.src = linkCard;
    cardList.append(templateElement)
}


btn.addEventListener('click',handlerCardSubmit )




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
 const buttonClosePopupImage = document.querySelector('.popup__close_type_image');
 const popupOpenImage = document.querySelector('.popup__image');
];
 //const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
 const btnLike = document.querySelector('.card__button-like')
 console.log("btnLike")
 console.log(btnLike)

 class Card {
    constructor(name, link, alt) {
        this._name = name
        this._link = link
        this._alt = alt
        this._like = false
        // this._image = image
    }

    _getTemplate() {
        const cardElement = document.querySelector('.card-template')
            .content
            .querySelector('.card')
            .cloneNode(true);
        console.log(cardElement)
        return cardElement;
    }

    generateCard() {
        console.log(this._element )
        this._element = this._getTemplate();
        this._setEventListeners();
        // Добавим данные
        this._element.querySelector('.card__image').src = this._link
        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__title').alt = this._alt;
        this._element.qu
        return this._element;
    }
     _setEventListeners(){
        this._element.addEventListener('click', () => {
            // this._element._handleOpenPopup()
            this._handleOpenPopup()
         })
         buttonClosePopupImage.addEventListener('click', () => {
             this._handleClosePopup()
         });
        console.log(btnLike)
        btnLike.addEventListener('click', () =>{
          this._handleLikeCard()
         })
     }
     _handleOpenPopup(){
         popupOpenImage.src = this._link;
         popupImage.classList.add('popup-opened');
     }

     _handleClosePopup() {
         popupOpenImage.src = this._link;
         popupImage.classList.remove('popup-opened');
     }
     _handleLikeCard(){
        this._link = !this._like
        // popupOpenImage.src = this._link;
         btnLike.target.classList.toggle('like-active')
     }
 }

 initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, item.alt);
    const cardElement = card.generateCard()
    console.log(cardElement)
    // Добавляем в DOM
    document.querySelector('.cards__list').append(cardElement);
});

console.log(initialCards)



 // реализация лайка
 // function handleLikeCard(evt) {
 //     evt.target.classList.toggle('like-active')
 // }
 //
 // // удаление карточки
 // function handleDeleteCard(evt) {
 //     evt.target.closest('.card').remove()
 // }




 // //создание новой карточки
 // function createCard(card) {
 //     const templateElement = templateCards.cloneNode(true);
 //     templateElement.querySelector('.card__title').textContent = card.name;
 //     const templateCardImage = templateElement.querySelector('.card__image');
 //     const btnLike = templateElement.querySelector('.card__button-like')
 //     const cardDelete = templateElement.querySelector('.card__button-delete')
 //     templateCardImage.setAttribute('src', card.link);
 //     btnLike.addEventListener('click', handleLikeCard);
 //     cardDelete.addEventListener('click', handleDeleteCard);
 //     templateCardImage.alt = card.name;
 //     templateCardImage.addEventListener('click', () => {
 //         handlePreviewImages(card)
 //     });
 //
 //     return templateElement
 //
 // }

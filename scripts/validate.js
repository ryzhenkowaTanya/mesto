const inputElement = formElement.querySelector('.popup__input')

formElement.addEventListener('submit', function (evt){
    evt.preventDefault()
});

// Слушатель события input
inputElement.addEventListener('input', function (evt) {
    console.log(evt.target.validity.valid);
});

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
    //find the error
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('.form__input-error_active');
};
// function which remove class with error
const hideInputError = (formElement, inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    formError.classList.remove('.form__input-error_active');
    formError.textContent = '';
};

// Function which checks validity feld
const isValid = (formElement, inputElement) => {
    console.log(formElement)
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

// Вызов функцию isValid на каждый ввод
inputElement.addEventListener('input', isValid);




const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement)
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            // У каждой формы отменим стандартное поведение
            evt.preventDefault();
        });

        // Для каждой формы вызовем функцию setEventListeners,
        // передав ей элемент формы
        setEventListeners(formElement);
    });
};

// Вызовем функцию
enableValidation();

// console.log(inputElement)
// const  showInputError = (formElement, inputElement, errorMessage)=>{
//     console.log(showInputError)
//     const errorName = inputElement.closest('.popup__form').querySelector('.form__input-name_error');
//     const errorJob = inputElement.closest('.popup__form').querySelector('.form__input-job_error');
//     errorName.textContent = errorMessage;
//     errorName.classList.add('.form__input-error_active');
//     errorJob.textContent = errorMessage;
//     errorJob.classList.add('.form__input-error_active');
//
// }
// const  hideInputError = (inputElement) =>{
//     const errorName = inputElement.closest('.popup__form').querySelector('.form__input-name_error');
//     const errorJob = inputElement.closest('.popup__form').querySelector('.form__input-job_error');
//     errorName.textContent = '';
//     errorName.classList.remove('.form__input-error_active');
//     errorName.textContent = '';
//     errorJob.classList.remove('.form__input-error_active');
// }
//
// //функция принимает элемент формы и проверяет его валидность
// const checkInputValidity = (formElement, inputElement) => {
//     const isInputNotValid = !inputElement.validity.valid;
// if(isInputNotValid){
//    const errorMessage = inputElement.validationMessage
//     showInputError(formElement,inputElement,errorMessage);
// } else{
//     hideInputError(inputElement)
// }
// }
// //отключение кнопки
// const toggleBtnState = (inputList, buttonElement) =>{
// const hasNotValidInput = inputList.some(
// inputElement => !inputElement.validity.valid);
// if(hasNotValidInput){
//     buttonElement.setAttribute('disabled', true);
// } else {
//     buttonElement.removeAttribute('disabled')}
// };
//
//
// //функция принимает на вход форму
// const setEvtListeners = (formElement) => {
//     formElement.addEventListener('submit', (evt => {
//         evt.preventDefault();
//     }))
// }
//
// //получаем массив инпутов
// const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
// console.log(inputList)
// //находиm кнопку
// const buttonElement = formElement.querySelector('.popup__button')
// inputList.forEach(inputElement =>{
//     inputElement.addEventListener('input',(evt)=>{
//         checkInputValidity(formElement, inputElement);
//         toggleBtnState(inputList, buttonElement);
//     })
// })
//
// //получаем Формы и делаем массив
// const enableValidation = ()=>{
//     const formEList = Array.from(document.querySelectorAll('.popup__form'))
//     formEList.forEach(setEvtListeners);
//     console.log(enableValidation)
// }









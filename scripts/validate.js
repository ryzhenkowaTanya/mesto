const inputElement = document.querySelectorAll('.popup__input')
console.log(inputElement)
const  showInputError = (formElement, inputElement, errorMessage)=>{
    const errorElement = inputElement.closest('.popup__form').querySelector('.form__input-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('.form__input-error_active');

}
const  hideInputError = (inputElement) =>{
    const errorElement = inputElement.closest('.popup__form').querySelector('.form__input-error');
    errorElement.textContent = '';
    errorElement.classList.remove('.form__input-error_active');
}

//функция принимает элемент формы и проверяет его валидность
const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
if(isInputNotValid){
   const errorMessage = inputElement.validationMessage
    showInputError(formElement,inputElement,errorMessage);
} else{
    hideInputError(inputElement)
}
}
//отключение кнопки
const toggleBtnState = (inputList, buttonElement) =>{
const hasNotValidInput = inputList.some(
inputElement => !inputElement.validity.valid);
if(hasNotValidInput){
    buttonElement.setAttribute('disabled', true);
} else {
    buttonElement.removeAttribute('disabled')}
};


//функция принимает на вход форму
const setEvtListeners = (formElement) => {
    formElement.addEventListener('submit', (evt => {
        evt.preventDefault();
    }))
}

//получаем массив инпутов
const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
console.log(formElement)
//находиm кнопку
const buttonElement = formElement.querySelector('.popup__button')
inputList.forEach(inputElement =>{
    inputElement.addEventListener('input',(evt)=>{
        checkInputValidity(formElement, inputElement);
        toggleBtnState(inputList, buttonElement);
    })
})

//получаем Формы и делаем массив
const enableValidation = ()=>{
    const formEList = Array.from(document.querySelectorAll('.popup__form'))
    formEList.forEach(setEvtListeners);
    console.log(enableValidation)
}









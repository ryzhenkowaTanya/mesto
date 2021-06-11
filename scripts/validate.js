const buttonElements = document.querySelectorAll('.popup__button');

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

const showInputError = (formElement, inputElement, errorMessage) => {
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

// Function which checks validity field
const isValid = (formElement, inputElement) => {
    console.log(formElement)
    console.log(inputElement)
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});


const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(
        (inputElement) => !inputElement.validity.valid
    );
    if (hasNotValidInput) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add('popup__button_inactive');
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove('popup__button_inactive');
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button')
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            toggleButtonState(inputList, buttonElement);
            isValid(formElement, inputElement)
        });
    });
    buttonElements.forEach((buttonElement) => toggleButtonState(inputList, buttonElement));
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => setEventListeners(formElement));
};

enableValidation();









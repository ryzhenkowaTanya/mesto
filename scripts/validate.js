function enableValidation(config) {
    const form = document.querySelector(config.form);
    form.addEventListener('submit', event => handleFormSubmit(event, config));
    form.addEventListener('input', event => handleFormInput(event, config));
}

function handleFormSubmit(event, config) {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    const button = form.querySelector(config.submitButton)
    button.setAttribute('disabled', 'disabled');
    form.reset()
}

function handleFormInput(event, config) {
    const input = event.target;
    const form = event.currentTarget
    setFieldError(form, input)
    setSubmitButtonState(form, config)
}

function setFieldError(form, input) {
    const span = document.querySelector(`#${input.id}-error`)
    span.textContent = input.validationMessage;

    if (input.validity.valid) {
        input.classList.remove('popup__input_type_error');
    } else {
        input.classList.add('popup__input_type_error');
    }

}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.submitButton) //
    const isValid = form.checkValidity()

    if (isValid) {
        button.classList.add('popup_button_valid');
        button.classList.remove('popup_button_invalid');
        button.removeAttribute('disabled');
    } else {
        button.classList.remove('popup_button_valid');
        button.classList.add('popup_button_invalid');
        button.setAttribute('disabled', 'disabled');
    }
}

enableValidation({
    form: '.popup__form[name="editInfo"]',
    submitButton: '.popup__button'
})

enableValidation({
    form: '.popup__form[name="insertInfo"]',
    submitButton: '.popup__button_create-card'
})






























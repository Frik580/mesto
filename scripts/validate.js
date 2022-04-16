//Валидаци форм

const objList = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__item",
  submitButtonSelector: ".popup-form__button",
  inactiveButtonClass: "popup-form__button_disabled",
  activeButtonClass: "popup-form__button_hover",
  inputErrorClass: "popup-form__item_type_error",
  errorClass: "popup-form__item_error_active",
};

const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};

const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      obj
    );
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const enableButton = (button, inactiv, activ) => {
  button.disabled = false;
  button.classList.remove(inactiv);
  button.classList.add(activ);
};

const disableButton = (button, inactiv, activ) => {
  button.disabled = true;
  button.classList.add(inactiv);
  button.classList.remove(activ);
};

const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    disableButton(
      buttonElement,
      obj.inactiveButtonClass,
      obj.activeButtonClass
    );
  } else {
    enableButton(buttonElement, obj.inactiveButtonClass, obj.activeButtonClass);
  }
};

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);

  // toggleButtonState(inputList, buttonElement, obj);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, obj);
  });
};

// Вызовем функцию
enableValidation(objList);

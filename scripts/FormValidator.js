import { hideInputError } from './index.js';


class FormValidator {
  constructor(obj, formSelector) {
    this._obj = obj;
    this._formSelector = formSelector;
  }

  _showInputError = (formElement, inputElement, errorMessage, obj) => {
    this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(obj.errorClass);
  };

  _checkInputValidity = (formElement, inputElement, obj) => {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        obj
      );
    } else {
      hideInputError(formElement, inputElement, obj);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _enableButton = (button, inactiv, activ) => {
    button.disabled = false;
    button.classList.remove(inactiv);
    button.classList.add(activ);
  };

  _disableButton = (button, inactiv, activ) => {
    button.disabled = true;
    button.classList.add(inactiv);
    button.classList.remove(activ);
  };

  _toggleButtonState = (inputList, buttonElement, obj) => {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(
        buttonElement,
        obj.inactiveButtonClass,
        obj.activeButtonClass
      );
    } else {
      this._enableButton(
        buttonElement,
        obj.inactiveButtonClass,
        obj.activeButtonClass
      );
    }
  };

  _setEventListeners = (formElement, obj) => {
    this._inputList = Array.from(
      formElement.querySelectorAll(obj.inputSelector)
    );
    this._buttonElement = formElement.querySelector(obj.submitButtonSelector);
    this._toggleButtonState(this._inputList, this._buttonElement, obj);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, obj);
        this._toggleButtonState(this._inputList, this._buttonElement, obj);
      });
    });
  };

  enableValidation = () => {
    this._formElement = document.querySelector(this._formSelector);
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement, this._obj);
  };
}

export default FormValidator;
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

  _hideInputError = (formElement, inputElement, obj) => {
    this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputErrorClass);
    this._errorElement.classList.remove(obj.errorClass);
    this._errorElement.textContent = "";
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
      this._hideInputError(formElement, inputElement, obj);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _enableButton = (button, inactiv) => {
    button.disabled = false;
    button.classList.remove(inactiv);
  };

  disableButton = (button, inactiv) => {
    button.disabled = true;
    button.classList.add(inactiv);
  };

  _toggleButtonState = (inputList, buttonElement, obj) => {
    if (this._hasInvalidInput(inputList)) {
      this.disableButton(buttonElement, obj.inactiveButtonClass);
    } else {
      this._enableButton(buttonElement, obj.inactiveButtonClass);
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
    this._setEventListeners(this._formElement, this._obj);
  };

  resetErrors = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(this._formElement, inputElement, this._obj);
    });
  };
}

export default FormValidator;

class FormValidator {
  constructor(obj, formSelector) {
    this._obj = obj;
    this._formElement = document.querySelector(formSelector);
    this._buttonElement = this._formElement.querySelector(
      this._obj.submitButtonSelector
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._obj.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._obj.errorClass);
  };

  _hideInputError = (inputElement) => {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._obj.inputErrorClass);
    this._errorElement.classList.remove(this._obj.errorClass);
    this._errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  enableButton = () => {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._obj.inactiveButtonClass);
  };

  disableButton = () => {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._obj.inactiveButtonClass);
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this.enableButton();
    }
  };

  enableValidation = () => {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._obj.inputSelector)
    );
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  resetErrors = () => {
    this._inputList.forEach((inputElement) =>
      this._hideInputError(inputElement)
    );
  };
}

export default FormValidator;

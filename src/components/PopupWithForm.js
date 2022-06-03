import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    // this._renderLoading = renderLoading;
    this._form = this._popup.querySelector(".popup-form");
    this._inputList = this._form.querySelectorAll(".popup-form__item");
    this._button = this._form.querySelector(".popup-form__button");
    this._textButton = this._button.textContent;
  }

  _getInputValues = () => {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  };

  setInputValues = (data) => {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  };

  close = () => {
    super.close();
    this._form.reset();
    this._renderLoading(false);
  };

  _renderLoading = (isLoading) => {
    if (isLoading) {
      this._button.textContent = "Сохранение...";
    } else {
      this._button.textContent = this._textButton;
    }
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderLoading(true);
      // this._renderLoading(true, this._button, this._textButton);
      this._handleFormSubmit(this._getInputValues());
      // this.close();
      //   this._button.textContent = this._textButton;
      //   console.log(this._textButton);
    });
  };
}

export default PopupWithForm;

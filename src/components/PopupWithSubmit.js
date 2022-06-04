import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
  constructor({ selector, handleSubmit }) {
    super(selector);
    this._handleSubmit = handleSubmit;
    this._button = this._popup.querySelector(".popup-submit__button");
    this._textButton = this._button.textContent;
  }

  open = (element, id) => {
    this._element = element;
    this._id = id;
    super.open();
  };

  close = () => {
    super.close();
    this._renderLoading(false);
  };

  _renderLoading = (isLoading) => {
    if (isLoading) {
      this._button.textContent = "Удаление...";
    } else {
      this._button.textContent = this._textButton;
    }
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._button.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._renderLoading(true);
      this._handleSubmit(this._element, this._id);
    });
  };
}

export default PopupWithSubmit;

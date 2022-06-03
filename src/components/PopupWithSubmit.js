import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
  constructor({ selector, handleSubmit }) {
    super(selector);
    this._handleSubmit = handleSubmit;
    this._button = this._popup.querySelector(".popup-submit__button");
  }

  open = (element, id) => {
    this._element = element;
    this._id = id;
    super.open();
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._button.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._element, this._id);
      this.close();
    });
  };
}

export default PopupWithSubmit;

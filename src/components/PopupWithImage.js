import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImage = this._popup.querySelector(".popup__pic");
    this._popupText = this._popup.querySelector(".popup__text");
  }

  open(item) {
    super.open();
    this._popupImage.src = item.link;
    this._popupImage.alt = item.name;
    this._popupText.textContent = item.name;
  }
}

export default PopupWithImage;

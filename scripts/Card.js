import { openPopup, popupZoomImage } from './index.js';

class Card {
  _template = document.querySelector("#element-template").content;
  _popupImage = document.querySelector(".popup__pic");
  _popupText = document.querySelector(".popup__text");
  constructor(data) {
    this._data = data;
  }

  _createCard = () => {
    this._card = this._template.querySelector(".element").cloneNode(true);
    this._image = this._card.querySelector(".element__pic");
    this._card.querySelector(".element__title").textContent = this._data.name;
    this._image.alt = this._data.name;
    this._image.src = this._data.link;
    this._card
      .querySelector(".element__del-button")
      .addEventListener("click", this._handleDelete);
    this._card
      .querySelector(".element__like-button")
      .addEventListener("click", this._activationLike);
    this._image.addEventListener("click", this._activationZoom);
  };

  _handleDelete = () => {
    if (this._card) {
      this._card.remove();
    }
  };

  _activationLike = (event) => {
    if (this._card) {
      event.target.classList.toggle("element__like-button_active");
    }
  };

  _activationZoom = () => {
    this._popupImage.src = this._data.link;
    this._popupImage.alt = this._data.link;
    this._popupText.textContent = this._data.name;
    openPopup(popupZoomImage);
  };

  getCard = () => {
    this._createCard();
    return this._card;
  };
}

export default Card;
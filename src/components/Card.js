
class Card {
  constructor({ data, handleCardClick }) {
    this._data = data;
    this._handleCardClick = handleCardClick;
    this._template = document.querySelector("#element-template").content;
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
    this._image.addEventListener("click", () => {
      this._handleCardClick();
    });
  };

  _handleDelete = () => {
    this._card.remove();
    this._card = null;
  };

  _activationLike = (event) => {
    event.target.classList.toggle("element__like-button_active");
  };

  getCard = () => {
    this._createCard();
    return this._card;
  };
}

export default Card;

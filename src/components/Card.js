class Card {
  constructor(
    {
      data,
      userID,
      handleCardClick,
      handleDeleteClick,
      handleAddLike,
      handleDeleteLike,
    },
    templateSelector
  ) {
    this._data = data;
    this._userID = userID;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
    this._likesArray = this._data.likes;
    this._template = document.querySelector(templateSelector).content;
  }

  _createCard = () => {
    this._card = this._template.querySelector(".element").cloneNode(true);
    this._image = this._card.querySelector(".element__pic");
    this._delButton = this._card.querySelector(".element__del-button");
    this._like = this._card.querySelector(".element__like-button");
    this._card.querySelector(".element__title").textContent = this._data.name;
    this._card.querySelector(".element__like-value").textContent =
      this._likesArray.length;
    this._image.alt = this._data.name;
    this._image.src = this._data.link;
    this._setEventListeners();
    if (!(this._data.owner._id === this._userID)) {
      this._delButton.remove();
      this._delButton = null;
    }
  };

  _setEventListeners = () => {
    this._likesArray.map((item) => {
      if (item._id === this._userID) {
        this._like.classList.add("element__like-button_active");
      }
    });
    this._delButton.addEventListener("click", () => {
      this._handleDeleteClick(this._card, this._data._id);
    });
    this._like.addEventListener("click", (event) => {
      if (event.target.classList.contains("element__like-button_active")) {
        this._handleDeleteLike(this._data);
      } else {
        this._handleAddLike(this._data);
      }
    });
    this._image.addEventListener("click", this._handleCardClick);
  };

  deleteLike = (data) => {
    this._like.classList.remove("element__like-button_active");
    this._likesArray = data.likes;
    this._card.querySelector(".element__like-value").textContent =
      this._likesArray.length;
  };

  addLike = (data) => {
    this._like.classList.add("element__like-button_active");
    this._likesArray = data.likes;
    this._card.querySelector(".element__like-value").textContent =
      this._likesArray.length;
  };

  getCard = () => {
    this._createCard();
    return this._card;
  };
}

export default Card;

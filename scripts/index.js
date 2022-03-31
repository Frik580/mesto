const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Общие фунции

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//Редактирование профиля

const popupEditProfile = document.querySelector(".popup_edit");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseEditProfile = document.querySelector(
  ".popup__close-button_edit"
);
const formEditProfile = document.querySelector(".popup-form_edit");
const nameInput = document.querySelector(".popup-form__item_el_name");
const jobInput = document.querySelector(".popup-form__item_el_job");
const nameValue = document.querySelector(".profile__title");
const jobValue = document.querySelector(".profile__text");

function openPopupToEditProfile() {
  openPopup(popupEditProfile);
  document.addEventListener("keyup", onProfileKeyUp);
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
}

function closePopupToEditProfile() {
  closePopup(popupEditProfile);
  document.removeEventListener("keyup", onProfileKeyUp);
}

function onProfileKeyUp(event) {
  if (event.key === "Escape") {
    closePopupToEditProfile();
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopupToEditProfile();
}

buttonEditProfile.addEventListener("click", openPopupToEditProfile);
buttonCloseEditProfile.addEventListener("click", closePopupToEditProfile);
formEditProfile.addEventListener("submit", handleProfileFormSubmit);

//Действия с карточками

const popupAddCard = document.querySelector(".popup_add");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonCloseAddCard = document.querySelector(".popup__close-button_add");
const cardsConteiner = document.querySelector(".elements__list");
const formAddCard = document.querySelector(".popup-form_add");
const placeInput = document.querySelector(".popup-form__item_el_place");
const urlInput = document.querySelector(".popup-form__item_el_url");
const template = document.querySelector("#element-template");

const createCard = (items) => {
  const card = template.content.querySelector(".element").cloneNode(true);
  const image = card.querySelector(".element__pic");
  image.src = items.link;
  image.alt = items.name;
  card.querySelector(".element__title").textContent = items.name;
  card
    .querySelector(".element__like-button")
    .addEventListener("click", activationLikeButton);
  card.querySelector(".element__del-button").addEventListener("click", () => {
    card.remove();
  });
  image.addEventListener("click", () => {
    openPopup(popupZoomImage);
    popupImage.src = items.link;
    popupImage.alt = items.link;
    popupText.textContent = items.name;
  });

  return card;
};

function openPopupToAddCard() {
  openPopup(popupAddCard);
  document.addEventListener("keyup", onCardsKeyUp);
  placeInput.value = "";
  urlInput.value = "";
}

function closePopupToAddCard() {
  closePopup(popupAddCard);
  document.removeEventListener("keyup", onCardsKeyUp);
}

function onCardsKeyUp(event) {
  if (event.key === "Escape") {
    closePopupToAddCard();
  }
}

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const items = {};
  items.link = urlInput.value;
  items.name = placeInput.value;
  renderCard(items);
  placeInput.value = "";
  urlInput.value = "";
  closePopupToAddCard();
};

const activationLikeButton = (evt) => {
  const eventTarget = evt.target;
  eventTarget.classList.toggle("element__like-button_active");
};

const renderCard = (items) => {
  cardsConteiner.prepend(createCard(items));
};

const cards = initialCards.map(function (items) {
  return createCard(items);
});

buttonAddCard.addEventListener("click", openPopupToAddCard);
buttonCloseAddCard.addEventListener("click", closePopupToAddCard);
cardsConteiner.append(...cards);
formAddCard.addEventListener("submit", handleCardFormSubmit);

//POPUP с картинкой
const popupZoomImage = document.querySelector(".popup_zoom");
const buttonCloseZoomImage = document.querySelector(
  ".popup__close-button_zoom"
);
const popupImage = document.querySelector(".popup__pic");
const popupText = document.querySelector(".popup__text");

function closePopupToZoomImage() {
  closePopup(popupZoomImage);
}

buttonCloseZoomImage.addEventListener("click", closePopupToZoomImage);

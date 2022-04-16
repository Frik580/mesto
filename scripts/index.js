const obj = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__item",
  submitButtonSelector: ".popup-form__button",
  inactiveButtonClass: "popup-form__button_disabled",
  activeButtonClass: "popup-form__button_hover",
  inputErrorClass: "popup-form__item_type_error",
  errorClass: "popup-form__item_error_active",
};

//Общие фунции

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", closeOnESC);
  document.addEventListener("click", onOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", closeOnESC);
  document.removeEventListener("click", onOverlayClick);
}

function closeOnESC(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

//Закрытие по Overlay

function onOverlayClick(event) {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.target);
  }
}

//Редактирование профиля

const popupEditProfile = document.querySelector(".popup_edit");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseEditProfile = document.querySelector(
  ".popup__close-button_edit"
);
const formEditProfile = document.forms.user;
const nameInput = formEditProfile.elements.username;
const jobInput = formEditProfile.elements.about;
const nameValue = document.querySelector(".profile__title");
const jobValue = document.querySelector(".profile__text");

function openPopupToEditProfile() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  const buttonElement = formEditProfile.elements.button;
  enableButton(buttonElement, obj.inactiveButtonClass, obj.activeButtonClass);

  const inputList = Array.from(
    formEditProfile.querySelectorAll(obj.inputSelector)
  );
  inputList.forEach((inputElement) => {
    hideInputError(formEditProfile, inputElement, obj);
  });

  openPopup(popupEditProfile);
}

function closePopupToEditProfile() {
  closePopup(popupEditProfile);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
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
const formAddCard = document.forms.place;
const placeInput = formAddCard.elements.namecard;
const urlInput = formAddCard.elements.link;
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
    popupImage.src = items.link;
    popupImage.alt = items.link;
    popupText.textContent = items.name;
    openPopup(popupZoomImage);
  });

  return card;
};

function openPopupToAddCard() {
  placeInput.value = "";
  urlInput.value = "";
  const buttonElement = formAddCard.elements.button;
  disableButton(buttonElement, obj.inactiveButtonClass, obj.activeButtonClass);

  const inputList = Array.from(formAddCard.querySelectorAll(obj.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(formAddCard, inputElement, obj);
  });

  openPopup(popupAddCard);
}

function closePopupToAddCard() {
  closePopup(popupAddCard);
}

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const items = {};
  items.link = urlInput.value;
  items.name = placeInput.value;
  renderCard(items);
  closePopupToAddCard();
};

const activationLikeButton = (event) => {
  event.target.classList.toggle("element__like-button_active");
};

const renderCard = (items) => {
  cardsConteiner.prepend(createCard(items));
};

const cards = initialCards.map((items) => {
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

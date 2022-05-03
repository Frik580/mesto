import Card from "./Card.js";
import initialCards from "./cards.js";
import FormValidator from "./FormValidator.js";

const obj = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__item",
  submitButtonSelector: ".popup-form__button",
  inactiveButtonClass: "popup-form__button_disabled",
  inputErrorClass: "popup-form__item_type_error",
  errorClass: "popup-form__item_error_active",
};

const validatorEditForm = new FormValidator(obj, ".popup-form_edit");
const validatorAddForm = new FormValidator(obj, ".popup-form_add");

// Редактирование профиля
const popupEditProfile = document.querySelector(".popup_edit");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonCloseEditProfile = document.querySelector(
  ".popup__close-button_edit"
);
const nameValue = document.querySelector(".profile__title");
const jobValue = document.querySelector(".profile__text");
const formEditProfile = document.forms.user;
const nameInput = formEditProfile.elements.username;
const jobInput = formEditProfile.elements.about;

// Действия с карточками
const popupAddCard = document.querySelector(".popup_add");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonCloseAddCard = document.querySelector(".popup__close-button_add");
const cardsContainer = document.querySelector(".elements__list");
const formAddCard = document.forms.place;
const placeInput = formAddCard.elements.namecard;
const urlInput = formAddCard.elements.link;

// POPUP с картинкой
export const popupZoomImage = document.querySelector(".popup_zoom");
const buttonCloseZoomImage = document.querySelector(
  ".popup__close-button_zoom"
);

// Функции
// Общие фунции
export function openPopup(popup) {
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

// Закрытие по Overlay
function onOverlayClick(event) {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.target);
  }
}

// Редактирование профиля
validatorEditForm.enableValidation();

function openPopupToEditProfile() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  validatorEditForm.resetErrors();
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

//Действия с карточками
validatorAddForm.enableValidation();

function openPopupToAddCard() {
  formAddCard.reset();
  validatorAddForm.resetErrors();
  openPopup(popupAddCard);
}

function closePopupToAddCard() {
  closePopup(popupAddCard);
}

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const item = {};
  item.name = placeInput.value;
  item.link = urlInput.value;
  addCard(renderCard(item));
  closePopupToAddCard();
  validatorAddForm.disableButton();
};

const renderCard = (item) => {
  const card = new Card(item);
  return card.getCard();
};

const addCard = (card) => {
  cardsContainer.prepend(card);
};

const cards = initialCards.map((item) => {
  return renderCard(item);
});

cardsContainer.append(...cards);

//POPUP с картинкой
function closePopupToZoomImage() {
  closePopup(popupZoomImage);
}

// Слушатели событий
// Редактирование профиля
buttonEditProfile.addEventListener("click", openPopupToEditProfile);
buttonCloseEditProfile.addEventListener("click", closePopupToEditProfile);
formEditProfile.addEventListener("submit", handleProfileFormSubmit);

//Действия с карточками
buttonAddCard.addEventListener("click", openPopupToAddCard);
buttonCloseAddCard.addEventListener("click", closePopupToAddCard);
formAddCard.addEventListener("submit", handleCardFormSubmit);

//POPUP с картинкой
buttonCloseZoomImage.addEventListener("click", closePopupToZoomImage);

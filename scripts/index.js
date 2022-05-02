import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const obj = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__item",
  submitButtonSelector: ".popup-form__button",
  inactiveButtonClass: "popup-form__button_disabled",
  activeButtonClass: "popup-form__button_hover",
  inputErrorClass: "popup-form__item_type_error",
  errorClass: "popup-form__item_error_active",
};

const initialCards = [
  {
    name: "Сочи",
    link: "https://avatars.mds.yandex.net/get-altay/3966989/2a00000176ab7e413b797e1b7daba191dcbe/XXL",
  },
  {
    name: "Грузия",
    link: "https://extraguide.ru/images/sp/b56a4c3ee5142c1254fabedf606ad3fd8f841230.jpg",
  },
  {
    name: "Черногория",
    link: "https://www.montenegro.nl/wp-content/uploads/sites/59/2016/03/1000-x-1000-meer-bootjes.jpg",
  },
  {
    name: "Бали",
    link: "https://miro.medium.com/max/1200/0*cHSpi5p1Q59mXFR4",
  },
  {
    name: "Анси",
    link: "https://i.pinimg.com/originals/61/df/f9/61dff98a81fc4f4e6ce41c3585fe7c31.jpg",
  },
  {
    name: "Шамони",
    link: "https://mykaleidoscope.ru/uploads/posts/2021-10/1634637021_106-mykaleidoscope-ru-p-shamoni-plate-krasivo-125.jpg",
  },
];

//Общие фунции
export const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = "";
};

export function openPopup(popup) {
  // Сброс ошибок валидации
  if (popup !== popupZoomImage) {
    const form = popup.querySelector(obj.formSelector);
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    inputList.forEach((inputElement) => {
      hideInputError(form, inputElement, obj);
    });
  }

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
  const validator = new FormValidator(obj, ".popup-form_edit");
  validator.enableValidation();
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
const cardsContainer = document.querySelector(".elements__list");
const formAddCard = document.forms.place;
const placeInput = formAddCard.elements.namecard;
const urlInput = formAddCard.elements.link;

function openPopupToAddCard() {
  placeInput.value = "";
  urlInput.value = "";
  const validator = new FormValidator(obj, ".popup-form_add");
  validator.enableValidation();
  openPopup(popupAddCard);
}

function closePopupToAddCard() {
  closePopup(popupAddCard);
}

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const items = {};
  items.name = placeInput.value;
  items.link = urlInput.value;
  renderCard(items);
  closePopupToAddCard();
};

const renderCard = (items) => {
  const card = new Card(items);
  cardsContainer.prepend(card.getCard());
};

const cards = initialCards.map((items) => {
  const card = new Card(items);
  return card.getCard();
});

buttonAddCard.addEventListener("click", openPopupToAddCard);
buttonCloseAddCard.addEventListener("click", closePopupToAddCard);
cardsContainer.append(...cards);
formAddCard.addEventListener("submit", handleCardFormSubmit);

//POPUP с картинкой

export const popupZoomImage = document.querySelector(".popup_zoom");
const buttonCloseZoomImage = document.querySelector(
  ".popup__close-button_zoom"
);

function closePopupToZoomImage() {
  closePopup(popupZoomImage);
}

buttonCloseZoomImage.addEventListener("click", closePopupToZoomImage);

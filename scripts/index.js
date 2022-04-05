const initialCards = [
  // {
  //   name: "Архыз",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  // },
  // {
  //   name: "Челябинская область",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  // },
  // {
  //   name: "Иваново",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  // },
  // {
  //   name: "Камчатка",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  // },
  // {
  //   name: "Холмогорский район",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  // },
  // {
  //   name: "Байкал",
  //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  // },
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
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  openPopup(popupEditProfile);
  document.addEventListener("keyup", onProfileKeyUp);
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
  openPopup(popupAddCard);
  document.addEventListener("keyup", onCardsKeyUp);
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
  closePopupToAddCard();
};

const activationLikeButton = (evt) => {
  const eventTarget = evt.target;
  eventTarget.classList.toggle("element__like-button_active");
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

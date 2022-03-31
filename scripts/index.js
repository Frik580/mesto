//Редактирование профиля
const popupElementEdit = document.querySelector(".popup_edit");
const editButton = document.querySelector(".profile__edit-button");
const closeButtonEdit = document.querySelector(".popup__close-button_edit");
const formElementEdit = document.querySelector(".popup-form_edit");
const nameInput = document.querySelector(".popup-form__item_el_name");
const jobInput = document.querySelector(".popup-form__item_el_job");
const nameValue = document.querySelector(".profile__title");
const jobValue = document.querySelector(".profile__text");

function openPopupEdit() {
  popupElementEdit.classList.add("popup_opened");
  document.addEventListener("keyup", onDocumentKeyUp);
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
}

function closePopupEdit() {
  popupElementEdit.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopupEdit();
}

editButton.addEventListener("click", openPopupEdit);
closeButtonEdit.addEventListener("click", closePopupEdit);
formElementEdit.addEventListener("submit", handleProfileFormSubmit);

//Добавление нового элемента

const popupElementAdd = document.querySelector(".popup_add");
const addButton = document.querySelector(".profile__add-button");
const closeButtonAdd = document.querySelector(".popup__close-button_add");
const delButton = document.querySelector(".element__del-button");
const placeInput = document.querySelector(".popup-form__item_el_place");
const urlInput = document.querySelector(".popup-form__item_el_url");
const elementsConteiner = document.querySelector(".elements__list");
const formElementAdd = document.querySelector(".popup-form_add");

function openPopupAdd() {
  popupElementAdd.classList.add("popup_opened");
  document.addEventListener("keyup", onDocumentKeyUp);
  placeInput.value = "";
  urlInput.value = "";
}

function closePopupAdd() {
  popupElementAdd.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
}

addButton.addEventListener("click", openPopupAdd);
closeButtonAdd.addEventListener("click", closePopupAdd);

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

const createElement = (items) => {
  const template = document.querySelector("#element-template");
  const element = template.content.querySelector(".element").cloneNode(true);
  element.querySelector(".element__pic").src = items.link;
  element.querySelector(".element__title").textContent = items.name;
  element.querySelector(".element__pic").alt = items.name;
  element
    .querySelector(".element__like-button")
    .addEventListener("click", activationLikeButton);
  element
    .querySelector(".element__del-button")
    .addEventListener("click", () => {
      element.remove();
    });
  element.querySelector(".element__pic").addEventListener("click", () => {
    popupElementPic.classList.add("popup_opened");
    document.addEventListener("keyup", onDocumentKeyUp);
    popupPic.src = items.link;
    popupText.textContent = items.name;
    popupPic.alt = items.link;
  });

  return element;
};

const activationLikeButton = (evt) => {
  const eventTarget = evt.target;
  eventTarget.classList.toggle("element__like-button_active");
};

const renderCard = (items) => {
  elementsConteiner.prepend(createElement(items));
};

//Обработчик события
const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const items = {};
  items.link = urlInput.value;
  items.name = placeInput.value;
  renderCard(items);
  placeInput.value = "";
  urlInput.value = "";
  closePopupAdd();
};

const elements = initialCards.map(function (items) {
  return createElement(items);
});

elementsConteiner.append(...elements);
formElementAdd.addEventListener("submit", handleCardFormSubmit);

//Функция закрытия popup по ESC
function onDocumentKeyUp(event) {
  if (event.key === "Escape") {
    closePopupEdit();
    closePopupAdd();
    closePopupPic();
  }
}

//POPUP с картинкой
const popupElementPic = document.querySelector(".popup_zoom");
const closeButtonPic = document.querySelector(".popup__close-button_zoom");
const popupPic = document.querySelector(".popup__pic");
const popupText = document.querySelector(".popup__text");

function closePopupPic() {
  popupElementPic.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
}

closeButtonPic.addEventListener("click", closePopupPic);

export const initialCards = [
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

export const obj = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__item",
  submitButtonSelector: ".popup-form__button",
  inactiveButtonClass: "popup-form__button_disabled",
  inputErrorClass: "popup-form__item_type_error",
  errorClass: "popup-form__item_error_active",
};

// Редактирование профиля
export const buttonEditProfile = document.querySelector(".profile__edit-button");
export const nameValue = document.querySelector(".profile__title");
export const jobValue = document.querySelector(".profile__text");

// Действия с карточками
export const cardListSelector = ".elements__list";
export const buttonAddCard = document.querySelector(".profile__add-button");
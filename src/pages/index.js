import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  obj,
  buttonEditProfile,
  nameValue,
  jobValue,
  buttonAddCard,
  cardListSelector,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";

const validatorEditForm = new FormValidator(obj, ".popup-form_edit");
const validatorAddForm = new FormValidator(obj, ".popup-form_add");

const popupZoomImage = new PopupWithImage(".popup_zoom");
popupZoomImage.setEventListeners();

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card({
        data: item,
        handleCardClick: () => {
          popupZoomImage.open(item);
        },
      });
      const cardElement = card.getCard();
      defaultCardList.addItem(cardElement);
    },
  },
  cardListSelector
);
defaultCardList.renderItem();

// Редактирование профиля
validatorEditForm.enableValidation();

const popupEditProfile = new PopupWithForm({
  selector: ".popup_edit",
  handleFormSubmit: (data) => {
    const info = new UserInfo(data);
    info.setUserInfo();
  },
});

popupEditProfile.setEventListeners();

function openPopupToEditProfile() {
  const info = new UserInfo({
    username: nameValue.textContent,
    about: jobValue.textContent,
  });
  info.getUserInfo();
  validatorEditForm.resetErrors();
  validatorEditForm.enableButton();
  popupEditProfile.open();
}

buttonEditProfile.addEventListener("click", openPopupToEditProfile);

//Действия с карточками
validatorAddForm.enableValidation();

const popupAddCard = new PopupWithForm({
  selector: ".popup_add",
  handleFormSubmit: (data) => {
    const submit = {};
    submit.name = data.namecard;
    submit.link = data.link;
    const handleCard = new Section(
      {
        items: [submit],
        renderer: (item) => {
          const card = new Card({
            data: item,
            handleCardClick: () => {
              popupZoomImage.open(item);
            },
          });
          const cardElement = card.getCard();
          handleCard.addItem(cardElement);
        },
      },
      cardListSelector
    );
    handleCard.renderItem();
    validatorAddForm.disableButton();
  },
});

popupAddCard.setEventListeners();

function openPopupToAddCard() {
  validatorAddForm.resetErrors();
  popupAddCard.open();
}

buttonAddCard.addEventListener("click", openPopupToAddCard);

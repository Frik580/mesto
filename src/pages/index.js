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
  buttonAddCard,
  cardListSelector,
  templateSelector,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";

function createCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        popupZoomImage.open(item);
      },
    },
    templateSelector
  );
  return card.getCard();
}

const validatorEditForm = new FormValidator(obj, ".popup-form_edit");
const validatorAddForm = new FormValidator(obj, ".popup-form_add");

const popupZoomImage = new PopupWithImage(".popup_zoom");
popupZoomImage.setEventListeners();

const info = new UserInfo({ selectorName: ".profile__title", selectorInfo: ".profile__text" });

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => createCard(item),
  },
  cardListSelector
);
defaultCardList.renderItem();

// Редактирование профиля
validatorEditForm.enableValidation();

const popupEditProfile = new PopupWithForm({
  selector: ".popup_edit",
  handleFormSubmit: (data) => {
    info.setUserInfo(data);
  },
});

popupEditProfile.setEventListeners();

function openPopupToEditProfile() {
  popupEditProfile.setInputValues(info.getUserInfo());
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
    const card = {};
    card.name = data.namecard;
    card.link = data.link;
    defaultCardList.addItem(card);
  },
});

popupAddCard.setEventListeners();

function openPopupToAddCard() {
  validatorAddForm.resetErrors();
  validatorAddForm.disableButton();
  popupAddCard.open();
}

buttonAddCard.addEventListener("click", openPopupToAddCard);

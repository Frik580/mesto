import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import {
  avatar,
  config,
  obj,
  buttonEditProfile,
  buttonAddCard,
  cardListSelector,
  templateSelector,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";

const validatorEditForm = new FormValidator(obj, ".popup-form_edit");
validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator(obj, ".popup-form_add");
validatorAddForm.enableValidation();
const validatorAvatarForm = new FormValidator(obj, ".popup-form_avatar");
validatorAvatarForm.enableValidation();

const api = new Api(config);

const promises = [api.getUserInfo(), api.getInitialCards()];

Promise.all(promises)
  .then((results) => {
    const data = results[0];
    const userID = data._id;
    const initialCards = results[1];

    const defaultCardList = new Section(
      {
        items: initialCards,
        renderer: (item) => createCard(item),
      },
      cardListSelector
    );
    defaultCardList.renderItems(initialCards);

    const popupZoomImage = new PopupWithImage(".popup_zoom");
    popupZoomImage.setEventListeners();

    const popupDeleteCard = new PopupWithSubmit({
      selector: ".popup_submit",
      handleSubmit: (element, id) => deleteCard(element, id),
    });
    popupDeleteCard.setEventListeners();

    function createCard(item) {
      const card = new Card(
        {
          data: item,
          handleCardClick: () => popupZoomImage.open(item),
          userID,
          handleDeleteClick: (element, id) => {
            popupDeleteCard.open(element, id);
          },
          handleAddLike: (data) => {
            return api
              .addLike(data)
              .then((data) => {
                card.addLike(data);
              })
              .catch((err) => {
                console.log(err);
              });
          },
          handleDeleteLike: (data) => {
            return api
              .deleteLike(data)
              .then((data) => {
                card.deleteLike(data);
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        templateSelector
      );
      return card.getCard();
    }

    const deleteCard = (element, id) => {
      return api
        .deleteCard(id)
        .then(() => {
          element.remove();
          element = null;
          popupDeleteCard.close();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postCard = (data) => {
      return api
        .postCard(data)
        .then((obj) => {
          defaultCardList.addItem(obj);
          popupAddCard.close();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // 1
    const popupAddCard = new PopupWithForm({
      selector: ".popup_add",
      handleFormSubmit: (data) => {
        const card = {};
        card.name = data.namecard;
        card.link = data.link;
        postCard(card);
      },
    });
    popupAddCard.setEventListeners();

    function openPopupToAddCard() {
      validatorAddForm.resetErrors();
      validatorAddForm.disableButton();
      popupAddCard.open();
    }

    buttonAddCard.addEventListener("click", openPopupToAddCard);

    // Управление профилем
    const info = new UserInfo({
      selectorName: ".profile__title",
      selectorInfo: ".profile__text",
      selectorAvatar: ".profile__avatar",
    });

    info.setUserInfo(data);

    const editUserInfo = (data) => {
      return api
        .editUserInfo(data)
        .then((obj) => {
          info.setUserInfo(obj);
          popupEditProfile.close();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // 2
    const popupEditProfile = new PopupWithForm({
      selector: ".popup_edit",
      handleFormSubmit: editUserInfo,
    });
    popupEditProfile.setEventListeners();

    function openPopupToEditProfile() {
      popupEditProfile.setInputValues(info.getUserInfo());
      validatorEditForm.resetErrors();
      validatorEditForm.enableButton();
      popupEditProfile.open();
    }

    buttonEditProfile.addEventListener("click", openPopupToEditProfile);

    // Аватар
    const editAvatar = (data) => {
      return api
        .editAvatar(data)
        .then((obj) => {
          avatar.src = obj.avatar;
          popupEditAvatar.close();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // 3
    const popupEditAvatar = new PopupWithForm({
      selector: ".popup_avatar",
      handleFormSubmit: editAvatar,
    });
    popupEditAvatar.setEventListeners();

    function openPopupToEditAvatar() {
      validatorAvatarForm.resetErrors();
      validatorAvatarForm.disableButton();
      popupEditAvatar.open();
    }

    avatar.addEventListener("click", openPopupToEditAvatar);
  })
  .catch((err) => {
    console.log(err);
  });

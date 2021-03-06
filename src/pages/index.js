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
  popupFormSelectors,
  popupSelectors,
  selectorName,
  selectorInfo,
  selectorAvatar,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";

const validatorEditForm = new FormValidator(obj, popupFormSelectors.edit);
validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator(obj, popupFormSelectors.add);
validatorAddForm.enableValidation();
const validatorAvatarForm = new FormValidator(obj, popupFormSelectors.avatar);
validatorAvatarForm.enableValidation();

const api = new Api(config);
const promises = [api.getUserInfo(), api.getInitialCards()];

console.log(popupSelectors.zoom);

Promise.all(promises)
  .then((results) => {
    const data = results[0];
    const userID = data._id;
    const initialCards = results[1];

    const defaultCardList = new Section(
      { renderer: (item) => createCard(item) },
      cardListSelector
    );
    defaultCardList.renderItems(initialCards);

    const popupZoomImage = new PopupWithImage(popupSelectors.zoom);
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
          handleAddLike: (data) => addLike(data),
          handleDeleteLike: (data) => deleteLike(data),
        },
        templateSelector
      );

      const addLike = (data) => {
        return api
          .addLike(data)
          .then((data) => {
            card.addLike(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const deleteLike = (data) => {
        return api
          .deleteLike(data)
          .then((data) => {
            card.deleteLike(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

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
      selector: popupSelectors.add,
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

    // ???????????????????? ????????????????
    const info = new UserInfo({
      selectorName,
      selectorInfo,
      selectorAvatar,
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
      selector: popupSelectors.edit,
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

    // ????????????
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
      selector: popupSelectors.avatar,
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

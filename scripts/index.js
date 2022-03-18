const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const ESC_KEY = "Escape";

let formElement = document.querySelector('.popup-form');
let nameInput = document.querySelector('.popup-form__item_el_name');
let jobInput = document.querySelector('.popup-form__item_el_job');
let nameValue = document.querySelector('.profile__title');
let jobValue = document.querySelector('.profile__text');


function openPopup() {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', onDocumentKeyUp);
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', onDocumentKeyUp);
}

function onDocumentKeyUp(event) {
    if (event.key === ESC_KEY) {
        closePopup();
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);


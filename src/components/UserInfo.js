class UserInfo {
  constructor({ username, about }) {
    this._username = username;
    this._about = about;
    this._nameValue = document.querySelector(".profile__title");
    this._jobValue = document.querySelector(".profile__text");
    this._nameInput = document.forms.user.elements.username;
    this._jobInput = document.forms.user.elements.about;
  }

  getUserInfo = () => {
    this._nameInput.value = this._username;
    this._jobInput.value = this._about;
  };

  setUserInfo = () => {
    this._nameValue.textContent = this._username;
    this._jobValue.textContent = this._about;

  };
}

export default UserInfo;
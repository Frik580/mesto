class UserInfo {
  constructor({ selectorName, selectorInfo }) {
    this._selectorName = selectorName;
    this._selectorInfo = selectorInfo;
    this._nameValue = document.querySelector(".profile__title");
    this._jobValue = document.querySelector(".profile__text");
  }

  getUserInfo = () => {
    this._data = {};
    this._data[this._selectorName] = this._nameValue.textContent;
    this._data[this._selectorInfo] = this._jobValue.textContent;
    return this._data;
  };

  setUserInfo = (data) => {
    this._nameValue.textContent = data[this._selectorName];
    this._jobValue.textContent = data[this._selectorInfo];
  };
}

export default UserInfo;

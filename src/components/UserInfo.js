class UserInfo {
  constructor({ selectorName, selectorInfo }) {
    this._selectorName = selectorName;
    this._selectorInfo = selectorInfo;
    this._nameValue = document.querySelector(this._selectorName);
    this._jobValue = document.querySelector(this._selectorInfo);
  }

  getUserInfo = () => {
    this._data = {};
    this._data.username = this._nameValue.textContent;
    this._data.about = this._jobValue.textContent;
    return this._data;
  };

  setUserInfo = (data) => {
    this._nameValue.textContent = data.username;
    this._jobValue.textContent = data.about;
  };
}

export default UserInfo;

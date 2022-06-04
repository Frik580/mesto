class UserInfo {
  constructor({ selectorName, selectorInfo, selectorAvatar }) {
    this._selectorName = selectorName;
    this._selectorInfo = selectorInfo;
    this._selectorAvatar = selectorAvatar;
    this._nameValue = document.querySelector(this._selectorName);
    this._jobValue = document.querySelector(this._selectorInfo);
    this._avatarValue = document.querySelector(this._selectorAvatar);
  }

  getUserInfo = () => {
    this._data = {};
    this._data.name = this._nameValue.textContent;
    this._data.about = this._jobValue.textContent;
    return this._data;
  };

  setUserInfo = (data) => {
    this._nameValue.textContent = data.name;
    this._jobValue.textContent = data.about;
    this._avatarValue.src = data.avatar;
  };
}

export default UserInfo;

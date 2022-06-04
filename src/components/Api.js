class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  };

  getInitialCards = () => {
    return fetch(`${this._url}/cards`, { headers: this._headers }).then(
      this._handleResponse
    );
  };

  getUserInfo = () => {
    return fetch(`${this._url}/users/me`, { headers: this._headers }).then(
      this._handleResponse
    );
  };

  editUserInfo = (data) => {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  };

  postCard = (data) => {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  };

  deleteCard = (id) => {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  };

  addLike = (data) => {
    return fetch(`${this._url}/cards/${data._id}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  };

  deleteLike = (data) => {
    return fetch(`${this._url}/cards/${data._id}/likes`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  };

  editAvatar = (data) => {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  };
}

export default Api;

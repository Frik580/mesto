class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popup = document.querySelector(this._selector);
  }

  open() {
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._buttonClose = this._popup.querySelector(".popup__close-button");
    document.addEventListener("keyup", this._handleEscClose);
    document.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
    this._buttonClose.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;

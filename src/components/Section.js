class Section {
  constructor({  renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems = (items) => { 
    items.forEach(item => {
      const card = this._renderer(item); 
      this._container.append(card); 
    });
  };

  addItem = (item) => {
    const card = this._renderer(item);
    this._container.prepend(card);
  };
}

export default Section;

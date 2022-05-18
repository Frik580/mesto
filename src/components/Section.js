class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItem = () => {
    this._renderedItems.map((item) => {
      this.addItem(item);
    });
  };

  addItem = (item) => {
    const card = this._renderer(item);
    this._container.prepend(card);
  };
}

export default Section;

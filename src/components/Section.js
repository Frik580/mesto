
class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItem = () => {
    this._renderedItems.map((item) => {
      this._renderer(item);
    });
  }

  addItem = (element) => {
    this._container.prepend(element);
  }
}

export default Section;

export default class AbstractView {

  constructor(inputData) {
    this.inputData = inputData;
  }

  /**
   * returns a DOM element created from getMarkup()
   * and binds event handlers to it
   * @return {Element}
   */
  get element() {
    if (!this._element) {
      const domElement = document.createElement('div');
      domElement.innerHTML = this.getMarkup();
      this._element = domElement.firstChild;
      this.bindHandlers();
    }
    return this._element;
  }

  renderView() {
    const appElement = document.getElementById('app');
    appElement.parentNode.replaceChild(this.element, appElement);
    this.viewRendered();
  }

  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }

  bindHandlers() {

  }

  clearHandlers() {

  }

  viewRendered() {

  }
}

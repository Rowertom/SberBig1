import { api } from './api.js';

export class Card {
  constructor(dataCat, selectorTemplate, onClickToEdit = () => { }) {
    this._data = dataCat;
    this._selectorTemplate = selectorTemplate;
    this.onClickToEdit = onClickToEdit;
  }

  _getTemplate() {
    const elem = document.querySelector(this._selectorTemplate).content.querySelector(".card");
    return elem;
  }

  getElement() {
    this.element = this._getTemplate().cloneNode(true);
    const cardTitle = this.element.querySelector('.card__name');
    const cardImage = this.element.querySelector('.card__image');
    const cardLike = this.element.querySelector('.card__like');
    const deleteBtn = this.element.querySelector('.card__delete');
    const cardLink = this.element.querySelector('.card__link');

    deleteBtn.setAttribute('id', this._data.id);
    deleteBtn.addEventListener('click', (e) => {
      if (confirm('Are you sure?')) {
        api.deleteCat(this._data.id).then(() => {
          const elem = document.getElementById(this._data.id);
          elem.parentElement.remove();
        });
      }
    });

    if (!this._data.favourite) {
      cardLike.remove();
    }

    cardTitle.textContent = this._data.name ?? "no name";
    if (this._data.img_link !== undefined) {
      cardImage.src = this._data.img_link;
    }

    cardLink.addEventListener('click', () => {
      this.onClickToEdit(
        this.element,
        this._data.id,
        this._data.age,
        this._data.description,
        this._data.favourite,
        this._data.img_link,
        this._data.name,
        this._data.rate);
    });
    return this.element;
  }
}

class Card {
    constructor(dataCat, selectorTemplate) {
        this._date = dataCat;
        this._selectorTemplate = selectorTemplate;
    }

    _getTemplate() {
        const elem = document.querySelector(this._selectorTemplate).content.querySelector(".card");
        return elem;
    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true);
        const cardTitle = this.element.querySelector(".card__name");
        const cardImage = this.element.querySelector(".card__image");
        const cardLike = this.element.querySelector(".card__like");
        if (!this._date.favourite) {
            cardLike.remove();
        }
        cardTitle.textContent = this._date.name ?? "Noname";
        cardImage.src = this._date.img_link;
        return this.element;
    }
}
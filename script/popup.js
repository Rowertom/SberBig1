class Popup {
  constructor(className) {
    this._className = className;
    this.popup = document.querySelector(`.${className}`);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this.popup.classList.add("popup_active");
    document.addEventListener("keyup", this._handleEscUp);
  }

  close() {
    this.popup.classList.remove("popup_active");
    document.removeEventListener("keyup", this._handleEscUp);
  }

  setContent(content, id, age, description, favourite, rate) {
    console.log(content);
    const cardImage = content.querySelector('.card__image').src;
    const cardLink = content.querySelector('.card__link').textContent;
    const popupImage = document.querySelector('.form__image');
    popupImage.setAttribute('style', `background-image: url(${cardImage});`)
   const elements = [...document.querySelector('#popup-form-edit').elements];
    
    elements.forEach((input) => {
      console.log(input);
      if (input.type === 'submit') return;
      if (input.name === 'id') {
        input.value = id;
        return (input.disabled = true);
      }
      if (input.name === 'age') input.value = age;
      if (input.name === 'description') input.value = description;
      if (input.name === 'image') input.value = cardImage;
      if (input.name === 'name') input.value = cardLink;
      if (input.name === 'rate') input.value = rate;
      if (input.type === 'checkbox') input.checked = favourite;
    });
    this.data = content;
  }

  setEventListener() {
    this.popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains(this._className) ||
        evt.target.closest(".popup__close")
      ) {
        this.close();
      }
    });
  }
}
export default Popup;
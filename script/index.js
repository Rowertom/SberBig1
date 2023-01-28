
const cardsContainer = document.querySelector(".cards");
const btnOpenPopupForm = document.querySelector("#add");
const formAddCat = document.querySelector("#popup-form-cat");
const popupAddCat = new Popup("popup-add-cats");
popupAddCat.setEventListener();

cats.forEach((cat) => {
const cardInstance = new Card(cat, "#card-template");
const newCardElement = cardInstance.getElement();
cardsContainer.append(newCardElement);
})

function handleFormAddCat(e) {
    e.preventDefault();
    const elementsFormCat = [...formAddCat.elements];
    const dataFromForm = serializeForm(elementsFormCat);
    api.addNewCat(dataFromForm);
    createCat(dataFromForm);
    popupAddCat.close();
  }
  

btnOpenPopupForm.addEventListener("click", () => popupAddCat.open());
formAddCat.addEventListener("submit", handleFormAddCat);

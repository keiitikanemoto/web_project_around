const user = document.querySelector(".perfil__text");
const aboutUser = document.querySelector(".perfil__subText");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__about");
const popupDisplay = document.querySelector(".popup")
const closeButton = document.querySelector(".popup__close-window-button");
const editButton = document.querySelector(".perfil__button-edit");
const formElement = document.querySelector(".popup__container-form");
const submit = document.querySelector(".popup__container-form-button");



function displayBlock(popupDisplay, popupOpenClass) {
  popupDisplay.classList.add(popupOpenClass);
  if (popupOpenClass === "popup__opened") {
    nameInput.value = user.textContent;
    jobInput.value = aboutUser.textContent;
  }
}

function displayNone (popupDisplay, popupOpenClass) {
  popupDisplay.classList.remove(popupOpenClass);
}

closeButton.addEventListener("click", () => displayNone(popupDisplay, "popup__opened"));

editButton.addEventListener("click", () => displayBlock(popupDisplay, "popup__opened"));

submit.addEventListener("click", () => displayNone(popupDisplay, "popup__opened"));

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

 

  if (nameInput.value != "" && jobInput.value != "") {
    user.textContent = nameInput.value;
    aboutUser.textContent = jobInput.value;
  } 

}

formElement.addEventListener('submit', handleProfileFormSubmit);



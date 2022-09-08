const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputChance);

function onInputChance(event) {
  refs.nameOutput.textContent = event.currentTarget.value || "Anonymous";
}

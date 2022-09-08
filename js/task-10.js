function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  const markup = [];

  for (let i = 0; i <= amount - 1; i += 1) {
    const divRefs = document.createElement("div");
    const currentWidth = 30 + i * 10;
    const currentHeight = 30 + i * 10;
    divRefs.style.width = `${currentWidth}px`;
    divRefs.style.height = `${currentHeight}px`;
    divRefs.style.backgroundColor = getRandomHexColor();
    markup.push(divRefs);
  }

  refs.boxes.append(...markup);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.inputNumber.value = "";
}

function oncCreateBtnClick() {
  createBoxes(refs.inputNumber.value);
}

refs.createBtn.addEventListener("click", oncCreateBtnClick);
refs.destroyBtn.addEventListener("click", destroyBoxes);

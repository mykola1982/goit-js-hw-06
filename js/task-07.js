const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputRef.value}px`;
inputRef.addEventListener("input", onIputChange);

function onIputChange(event) {
  console.log(event.currentTarget.value);
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

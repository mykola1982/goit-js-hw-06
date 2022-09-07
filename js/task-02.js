const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemsListRef = document.querySelector("#ingredients");

const makeItem = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  itemRef.classList.add("item");
  return itemRef;
};

const itemsRef = ingredients.map(makeItem);

itemsListRef.append(...itemsRef);

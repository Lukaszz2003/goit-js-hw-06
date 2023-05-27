const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newArray = [];
const list = document.querySelector("#ingredients");

ingredients.map((ingredients) => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredients;
  newElement.classList.add("item");

  itemElement.push(newElement);
  listElement.append(newElement);
});

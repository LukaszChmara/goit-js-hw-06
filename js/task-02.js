const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liItems = ingredients.map((ingredients) => {
  const li = document.createElement("li");
  li.textContent = ingredients;
  li.classList.add("item");
  return li;  
  });

  ingredientsList.append(...liItems);
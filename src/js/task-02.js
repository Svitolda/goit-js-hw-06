const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

const ingredientsArr = ingredients.map(ingredient => {
  const ListItem = document.createElement("li")
  ListItem.textContent = ingredient
  ListItem.classList = "item-ingredient"
  return ListItem
})

ingredientsList.append(...ingredientsArr)
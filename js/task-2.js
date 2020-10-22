const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');
console.log(listIngredients);

ingredients.map(ing => {
  const listIngredientsItemCreate = document.createElement('li');
  listIngredientsItemCreate.textContent = ing;
  listIngredients.appendChild(listIngredientsItemCreate);
});

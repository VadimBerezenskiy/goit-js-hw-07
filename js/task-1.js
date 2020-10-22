const listCategories = document.querySelector('#categories');
// console.log(listCategories);

const amountListCategories = document.querySelectorAll('.item');
// console.log(amountListCategories);

amountListCategories.forEach(list => {
  console.log(
    `Категория: ${list.firstElementChild.textContent}`,
    `Количество элементов: ${list.lastElementChild.children.length}`,
  );
});

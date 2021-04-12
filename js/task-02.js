'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsArray = document.querySelector('ul');

const elements = ingredients.map(el => {
    const createList = document.createElement('li');
    createList.textContent = el;
    return createList;
})
ingredientsArray.append(...elements);


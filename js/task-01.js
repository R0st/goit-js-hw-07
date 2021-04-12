'use strict';

const selectedCategoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${selectedCategoriesEl.length} категории`);

selectedCategoriesEl.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.childNodes[3].children.length}`);
    // console.log(el.childNodes[3].children);
});

// const titleLi = document.querySelectorAll('h2');
// titleLi.forEach(el => {
//     console.log(`Категория: ${el.textContent}`);
    
//     const itemsLength = document.querySelectorAll('li');
//     console.log(`Количество элементов: ${itemsLength.length}`);
    
// });

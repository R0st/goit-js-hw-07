'use strict';

const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

const counterValue = document.querySelector('#value');
console.log(counterValue);

//добавить слушателя события
decrementBtn.addEventListener('click', function () {
    console.log('Клик на декремент');
    
    counter.decrement();
    console.log(counter);

    counterValue.textContent = counter.value;
});


incrementBtn.addEventListener('click', function () {
    console.log('Клик на инкремент');

    
    counter.increment();
    console.log(counter);

    counterValue.textContent = counter.value;
});


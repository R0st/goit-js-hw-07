'use strict';

const refs = {
    inputNameEl: document.querySelector('#name-input'),
    
    outputNameEl: document.querySelector('#name-output'),
};

refs.inputNameEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        refs.outputNameEl.textContent = 'незнакомец';
    } else {
         refs.outputNameEl.textContent = event.currentTarget.value;
    }
};
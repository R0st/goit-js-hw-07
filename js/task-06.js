'use strict';


const inputValidation = document.querySelector('#validation-input');
inputValidation.addEventListener('blur', onBlur);

function onBlur() {
    inputValidation.classList.add('valid');
    
    if (Number(inputValidation.value.length) === Number(inputValidation.dataset.length)) {
        inputValidation.classList.replace('invalid', 'valid');
    
    } else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }
};
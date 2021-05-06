'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('input'),
        span = document.querySelector('.invalid'),
        form = document.querySelector('form'),
        message = {
            done: 'Your application has been sent!',
            notСorrect: 'You entered an invalid email address!',
            empty: 'You have not entered an email address!'
        };


    function validateError(display, color) {
        input.style.border = `2px solid ${color}`
        span.style.color = color
        span.style.display = display
    }    

    function validate() {
        switch (true) {

            case input.validity.valueMissing : 
                validateError('block', '#FF2965');
                span.textContent = message.empty;
                break;

            case input.validity.typeMismatch : 
                validateError('block', '#FF2965');
                span.textContent = message.notСorrect;
                break;

            default :
                span.textContent = message.done;
                validateError('block', '#3EE9E5');

                setTimeout(() => {
                    span.style.display = '';
                    input.style.border = '';
                    form.reset();
                }, 2000)
        }
    }
    
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        validate();
    });

});

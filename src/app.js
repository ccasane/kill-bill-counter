const btnIncrease = document.querySelector('.counter__btn-increase');
const btnDecrease = document.querySelector('.counter__btn-decrease');
const btnReset = document.querySelector('.counter__btn-reset');

document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const result = document.querySelector('.counter__result');
    const textResult = result.querySelector('p')

    btnIncrease.addEventListener('click', () => {
        count++;
        textResult.textContent = count;
    });
    btnDecrease.addEventListener('click', () => {
        if (count > 0) { 
            count--;
        }
        textResult.textContent = count;
    })
    btnReset.addEventListener('click', () => {
        count = 0;
        textResult.textContent = count;
    });

})



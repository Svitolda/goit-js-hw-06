let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const span = document.getElementById("value");

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    span.textContent = counterValue;
});
btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    span.textContent = counterValue;
});

// function onRemoveNumber() {
//     counterValue -= 1;
//     span.textContent = counterValue;
// };

// function onAddNumber() {
//     counterValue += 1;
//     span.textContent = counterValue;
// };

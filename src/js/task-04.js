let counterValue = 0;

сonst decrement = document.querySelector('button[data-action="decrement"]');
сonst increment = document.querySelector('button[data-action="increment"]');
const span = document.getElementById("#value");

decrement.addEventListener('click', onRemoveNumber);
increment.addEventListener('click', onAddNumber);

function onRemoveNumber() {
    counterValue -= 1;
    span.textContent = counterValue;
};

function onAddNumber() {
    counterValue += 1;
    span.textContent = counterValue;
};

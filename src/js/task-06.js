const input = document.querySelector("input");
// const dataLength = input.dataset.length;

input.addEventListener("blur", onInputBlur);
 
function onInputBlur(event){
    const total = event.currentTarget.value.length;
if (Number(input.dataset.length) !== total) {
    input.classList.add("invalid");
    console.log(total);
    return;
} else {
    input.classList.add("valid"); 
    console.log(total);
}
};


// const inputEl = document.querySelector('input');
// inputEl.addEventListener('blur', onInputBlur);
// function onInputBlur(event) {
//     const total = event.currentTarget.value.length
//     if (Number(inputEl.dataset.length) !== total) {
//         inputEl.classList.add('invalid');
//         return;
//     }
//     inputEl.classList.add('valid');
// }
const btnChange = document.querySelector(".change-color");
const body = document.body

btnChange.addEventListener('click', onBtnClick)

function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}


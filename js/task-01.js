const liItem = document.querySelectorAll('.item');

liItem.forEach(el => {
    console.log(el.firstElementChild.textContent)
    console.log(el.lastElementChild.children.length)
})


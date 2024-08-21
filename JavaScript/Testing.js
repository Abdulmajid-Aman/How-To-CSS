let button = document.querySelector('.accordion')
let content = document.querySelector('.panel')

button.addEventListener('click', () => {
    button.classList.toggle('active')
    if (content.style.maxHeight ) {
        content.style.maxHeight = null
    } else {
        content.style.maxHeight = content.scrollHeight + "px"
    }
})
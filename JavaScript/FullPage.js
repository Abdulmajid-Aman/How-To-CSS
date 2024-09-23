let sideBtn = document.querySelector('.side')
let topBtn = document.querySelector('.top')
let instant = document.querySelector('.no-animation')

// Getting the overlay contents
let overlay2 = document.querySelector('.overlay2')
let overlay = document.getElementById('myNav')
let overlay3 = document.querySelector('.overlay3')

let closeBtn = document.querySelectorAll('.open')

// Opens from the side
sideBtn.addEventListener('click', () => {
    overlay.style.width = '100%'
})

// Opens from the top
topBtn.addEventListener('click', () => {
    overlay2.style.height = '100%'
})


// Opens instantly
instant.addEventListener('click', () => {
    overlay3.style.display = 'block'
})

// Closing the menu
for(let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', () => {
        overlay.style.width = '0'
        overlay2.style.height = '0'
        overlay3.style.display = 'none'
    }
)}

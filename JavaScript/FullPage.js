let sideBtn = document.querySelector('.side')
let topBtn = document.querySelector('.top')
let instant = document.querySelector('.no-animation')

// Getting the overlay contents
let overlay2 = document.querySelector('.overlay2')
let overlay = document.getElementById('myNav')
let overlay3 = document.querySelector('.overlay3')

let closeBtn = document.querySelector('.open')

sideBtn.addEventListener('click', () => {
    overlay.style.width = '100%'
})

// Opens from the side
closeBtn.addEventListener('click', () => {
    overlay.style.width = '0'
})

// Opens from the top
topBtn.addEventListener('click', () => {
    overlay2.style.height = '100%'
})


// Opens instantly
instant.addEventListener('click', () => {
    overlay3.style.display = 'block'
})
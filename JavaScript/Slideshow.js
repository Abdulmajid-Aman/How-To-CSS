let slideIndex = 0
let slides = document.querySelectorAll(".slides img")
let interval = null
let dots = document.querySelectorAll('.dot')

document.addEventListener('DOMContentLoaded', initializeSlide)

function initializeSlide() {
    slides[slideIndex].classList.add("display")
    setInterval(nextSlide, 5000)
    dots[slideIndex].classList.add('active')
}

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0
    } else if(index < 0) {
        slideIndex = slides.length - 1
    }
    slides.forEach(slide => {
        slide.classList.remove('display')
    })
    slides[slideIndex].classList.add("display")
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
    dots[slideIndex].classList.add('active') // Use classList.add instead of className += 
}

function prevSlide() {
    slideIndex--
    showSlide(slideIndex)
}

function nextSlide() {
    slideIndex++
    showSlide(slideIndex)
}

function currentSlide(n) {
    slideIndex = n - 1
    showSlide(slideIndex)
}
let countDown = new Date("Aug 22, 2024 13:52:00").getTime()

// Setting the interval
let x = setInterval(() => {
    let prevCountdown = new Date().getTime()
// Calculating the difference
    let diff = countDown - prevCountdown

// Getting the days, hours, minutes and seconds
    let days = Math.floor(diff /(1000 * 60 * 60 *24))
    let hour = Math.floor((diff % (1000 * 24 * 60 * 60))/ (1000 * 60 * 60))
    let minutes = Math.floor((diff % (1000 * 60 * 60 ))/ (1000 * 60 ))
    let seconds = Math.floor((diff % (1000 * 60 ))/ (1000))

    let display = document.querySelector('#timer')
    display.textContent = days + 'd ' + hour + 'h ' + minutes + 'min ' + seconds + 'sec'

    if(diff < 0) {
        clearInterval(x)
        display.textContent = "Timer has EXPIRED!!!"
    }
}, 1000)


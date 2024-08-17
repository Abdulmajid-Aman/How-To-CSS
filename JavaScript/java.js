let openBtn = document.getElementById('purchase-btn')

let closeBtn = document.getElementById('btn')

let modal = document.getElementById('id02')

openBtn.addEventListener('click', handleOpen)

closeBtn.addEventListener('click', handleClose)

function handleOpen() {
 console.log('Open button was clicked');
  modal.style.display = 'block'
}

function handleClose() {
    console.log('Close button was clicked');
    modal.style.display = 'none'
}
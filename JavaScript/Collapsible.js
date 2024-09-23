let accordion = document.getElementsByTagName('button')
console.log(accordion);

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        console.log(`Button number ${i} has been clicked`);
        
    })
}

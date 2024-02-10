function myFunction() {

    skillSet.forEach(element => {
        element.classList.toggle('svg-dark-mode');
        if (element.classList.contains('svg-dark-mode')) {
            localStorage.setItem('darkMode', 'enable');
        } else {
            localStorage.setItem('darkMode', 'disable');
        }
    });

    socialMedia.forEach(element => {
        element.classList.toggle('svg-dark-mode');
        if (element.classList.contains('svg-dark-mode')) {
            localStorage.setItem('darkMode', 'enable');
        } else {
            localStorage.setItem('darkMode', 'disable');
        }
    })

    label.classList.toggle('svg-dark-mode')

    if (label.classList.contains('svg-dark-mode')) {
        localStorage.setItem('darkMode', 'enable');
    } else {
        localStorage.setItem('darkMode', 'disable');
    }
}

let skillSet = document.getElementsByClassName('skill-set');
let socialMedia = document.getElementsByClassName('social-media');
let label = document.getElementsByClassName('label');
let buttonElement = document.getElementById('darkSwitch');
buttonElement.onclick = myFunction;

if (localStorage.getItem('darkMode') === 'enable') {
    element.classList.add('dark-mode') 
}


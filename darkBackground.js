function myFunction() {
    element.classList.toggle('dark-mode')
    if (element.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enable');
    } else {
        localStorage.setItem('darkMode', 'disable');
    }
}

let element  = document.body;
let buttonElement = document.getElementById('darkSwitch');
buttonElement.onclick = myFunction;

if (localStorage.getItem('darkMode') === 'enable') {
    element.classList.add('dark-mode') 
}

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

/*
const buttons = document.querySelectorAll('.mode-toggle')

buttons.forEach(button => {
  button.addEventListener('click', function () {
    document.body.classList.toggle('light-mode')

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('lightMode', 'enabled')
    } else {
      localStorage.setItem('lightMode', 'disabled')
    }
  })
})

if (localStorage.getItem('lightMode') === 'enabled') {
  document.body.classList.add('light-mode')
} */
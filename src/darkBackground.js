function myFunction() {

    if  (element.style.backgroundColor === 'black') {
        element.style.backgroundColor = 'white';
        element.style.color = 'black';
    } else {
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
    }
}

let element  = document.body;
let bodyElement = document.getElementById('darkSwitch');
bodyElement.onclick = myFunction;
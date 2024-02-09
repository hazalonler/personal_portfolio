let selectorFotomatic = document.getElementById('Fotomatic')
console.log(selectorFotomatic);
let imagesFotomatic = document.getElementById('imagesFotomatic')
imagesFotomatic.hidden = true
const projectImagesFotomatic = () => {

    if (imagesFotomatic.hidden === false) {
        imagesFotomatic.hidden = true
    } else {
        imagesFotomatic.hidden = false
    }

}


selectorFotomatic.querySelector('button').addEventListener('click', projectImagesFotomatic);

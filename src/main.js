let selector = document.querySelector('h4')

const projectImages = (event) => {
    
    if (selector === 'F2') {
        let images = document.getElementById('imagesF2')

        if (images.hidden === false) {
            images.hidden = true
        } else {
            images.hidden = false
        }
    }

    if (selector === 'Fotomatic') {
        let images = document.getElementById('imagesFotomatic')

        if (images.hidden === false) {
            images.hidden = true
        } else {
            images.hidden = false
        }
    }    

    if (selector === 'TeaCozy') {
        let images = document.getElementById('imagesTeaCozy')

        if (images.hidden === false) {
            images.hidden = true
        } else {
            images.hidden = false
        }
    }

}

selector.addEventListener('click', projectImages);


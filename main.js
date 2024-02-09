/// Clickable F2 Project Area
let selectorF2 = document.getElementById('F2')
let imagesF2 = document.getElementById('imagesF2')
imagesF2.hidden = true
const projectImages = () => {
    if (imagesF2.hidden === false) {
        imagesF2.hidden = true
    } else {
        imagesF2.hidden = false
    }
}
selectorF2.querySelector('button').addEventListener('click', projectImages);

/// Clickable Tea Cozy Project Area 
let selectorTeaCozy = document.getElementById('TeaCozy').querySelector('button');
let imagesTeaCozy = document.getElementById('imagesTeaCozy');
imagesTeaCozy.hidden = true
const projectImagesTeaCozy = () => {    
    if (imagesTeaCozy.hidden === true) {
        imagesTeaCozy.hidden = false
    } else {
        imagesTeaCozy.hidden = true
    }
}
selectorTeaCozy.addEventListener('click', projectImagesTeaCozy);

/// Clickable Fotomatic Project Area
let selectorFotomatic = document.getElementById('Fotomatic')
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




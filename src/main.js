let selectorF2 = document.getElementById('F2')
console.log(selectorF2);
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



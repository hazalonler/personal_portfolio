let selectorTeaCozy = document.getElementById('TeaCozy').querySelector('button');
console.log(selectorTeaCozy);

let imagesTeaCozy = document.getElementById('imagesTeaCozy')

imagesTeaCozy.hidden = true

const projectImagesTeaCozy = () => {    

    if (imagesTeaCozy.hidden === true) {
        imagesTeaCozy.hidden = false
    } else {
        imagesTeaCozy.hidden = true
    }
}


selectorTeaCozy.addEventListener('click', projectImagesTeaCozy);


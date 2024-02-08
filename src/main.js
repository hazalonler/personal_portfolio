let project = document.getElementById('project')

const projectImages = () => {
    let images = document.getElementById('images')

    if (images.hidden === false){
        images.hidden = true
    } else {
        images.hidden = false
    }
}

project.addEventListener('click', projectImages);


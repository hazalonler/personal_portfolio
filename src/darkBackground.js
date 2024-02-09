function myFunction() {
    element.classList.toggle("dark-mode");
    navEl.classList.toggle("nav-el-dark-mode");
}

let element  = document.body;
let navEl = element.querySelector('nav');
element.onclick = myFunction;
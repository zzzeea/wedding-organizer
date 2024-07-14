let LastImage = document.getElementsByClassName("img-last")[0];
let FirstImage = document.getElementsByClassName("img-first")[0];
let Heading = document.querySelector("#landing h1");
let Button = document.querySelector(".btn");

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    
    LastImage.style.top = value * 0.7 + 'px';
    FirstImage.style.top = value * 1 + 'px';
    FirstImage.style.marginTop = value * 0.6 + 'px';
    Heading.style.bottom = value * 0 + 'px';
    Heading.style.marginBottom = value * 6 + 'px';
    Button.style.marginTop = value * 0.1 + 'px';
})
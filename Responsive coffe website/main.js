let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
        seaarch.classList.toggle('active'):
        navbar.classList.remove('active'):
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
        navbar.classList.toggle('active'):
        seaarch.classList.remove('active'):
}


window.onscroll = () => {
        navbar.classList.remove('active'):
        seaarch.classList.remove('active'):
}


let header = document.querySelector 'Header';

window.addEventLissener('scroll' , () => {
        header.classlist.togle('shadow', window.scrolly > 0)
});

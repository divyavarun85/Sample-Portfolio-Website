/*Setting up the humburger Menu button */

const menuBTn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');


let showMenu = false;

menuBTn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');

        showMenu = true;
    }else {
        hamburger.classList.remove('open');
        showMenu = false;
    }
}
class Menu{
    showMenu(){
        this.rotateBurger();
        this.extendHeader();
        this.showNavigation();
    }

    rotateBurger(){
        burger.classList.toggle("header-logo-burger-active");
    }

    extendHeader(){
        header.classList.toggle('header-active');
    }

    showNavigation(){
        menu.classList.toggle('header-menu-block-active');
    }
}

const burger = document.querySelector('.header-logo-burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.header-menu-block');
burger.addEventListener('click', ()=>{new Menu().showMenu()})
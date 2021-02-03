const menu = document.querySelector('#menu_toggle')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')
const welcomeSection = document.querySelector('.welcome-section')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    welcomeSection.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);
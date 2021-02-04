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


gsap.registerPlugin(ScrollTrigger);


gsap.from(".welcome_animation", {scrollTrigger: {trigger:".welcome_animation", toggleActions:"restart none none none"},duration: 1.5, opacity: 0, y: -150,ease: "back", stagger: 0.3});
gsap.from(".navbar_animation", {duration: 4, opacity: 0, x: -150, stagger: 0.3});


gsap.from(".contact_animation", {scrollTrigger: {trigger:".contact_animation", toggleActions:"restart none none none"}, duration: 1, opacity: 0, y: -120,ease: "back", stagger: 0.3});

gsap.from(".footer_animation_btn", {scrollTrigger: {trigger:"footer_animation_btn", toggleActions: "restart none none none"}, duration: 3, opacity: 0, y: -70,ease: "back", stagger: 0.3});
gsap.from(".footer_animation_text", {scrollTrigger: {trigger:"footer_animation_text", toggleActions: "restart none none none"}, duration: 3, opacity: 0, x: -150, ease: "back", stagger: 0.3});

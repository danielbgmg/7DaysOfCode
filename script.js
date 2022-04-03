const menuIcon = document.querySelector('.c-header__icon')
const nav = document.querySelector('.c-header__nav')
const body = document.querySelector('body')

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open')
    body.classList.toggle('overflow')
})
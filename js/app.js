const openToggle = document.querySelector('.open')
const closeToggle = document.querySelector('.close')
const menu = document.querySelector('.menu')
const page = document.querySelector('.container')

openToggle.addEventListener('click',() => {
    page.style.transform = 'rotate(-15deg)'
    menu.style.transform = 'rotate(-90deg)'
})

closeToggle.addEventListener('click',() => {
    page.style.transform = ''
    menu.style.transform = ''
})

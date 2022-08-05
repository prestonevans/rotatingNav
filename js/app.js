const open = document.querySelector('.open')
const close = document.querySelector('.close')
const menu = document.querySelector('.menu')
const page = document.querySelector('.container')

open.addEventListener('click',() => {
    page.style.transform = 'rotate(-15deg)'
    menu.style.transform = 'rotate(-90deg)'
})

close.addEventListener('click',() => {
    page.style.transform = ''
    menu.style.transform = ''
})

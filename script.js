// Global variables
const menuopen = document.querySelector('.header__hamburger')

const sidebar = document.querySelector('.sidebar')
const menuclose = document.querySelector('.sidebar__closebutton')


// Open Sidebar menu on mobile layout
menuopen.addEventListener('click', () => {
    sidebar.style.display = 'block'
    menuclose.style.display = 'block'
})

// Close sidebar menu on mobile layout
menuclose.addEventListener('click', () => {
    sidebar.style.display = 'none'
    menuclose.style.display = 'none'

})
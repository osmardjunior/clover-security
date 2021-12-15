// CHANGE MENU ON SCROLL
const header = document.querySelector('.js-header')

function menuHandler(event){

  if (window.scrollY > 200) {
    header.classList.add('active')
    menuDropdown.style.top = '7.1rem'

  } else if(window.scrollY < 200 || window.innerWidth < 950){
    header.classList.remove('active')
    menuDropdown.style.top = '14rem'

  }
}

window.addEventListener('scroll', menuHandler)

// OPEN/CLOSE DROPDOWN
const menu1 = document.querySelector('.menu-dropdown1')
const menu2 = document.querySelector('.menu-dropdown2')
const menuDropdown = document.querySelector('.js-menu-dropdown')
const menu1DropdownHandler = document.querySelector('.js-top-dropdown_menu1')
const menu2DropdownHandler = document.querySelector('.js-top-dropdown_menu2')



function dropdownMenu1(event) {
  event.preventDefault()

  menu1.classList.toggle('active')
  menu2.classList.remove('active')

  
}

function dropdownMenu2(event) {
  event.preventDefault()
  menu2.classList.toggle('active')
  menu1.classList.remove('active')
  
}

menu1DropdownHandler.addEventListener('click', dropdownMenu1)
menu2DropdownHandler.addEventListener('click', dropdownMenu2)
// menu1.addEventListener('mouseleave', dropdownMenu1)
// menu2.addEventListener('mouseleave', dropdownMenu2)


// VERIFY WINDOW SIZE AND FIX DROPDOWN TOP
window.addEventListener('resize', (event) => {
  // console.log(event)
  if (event.target.innerWidth < 950) {
    menuDropdown.style.top = '11.1rem'

  } else if(event.target.innerWidth > 950 && window.scrollY < 200){
    menuDropdown.style.top = '14rem'

  }
})
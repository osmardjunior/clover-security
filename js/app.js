// CHANGE MENU ON SCROLL
function menuHandler(event){
  const header = document.querySelector('.js-header')

  if (window.scrollY > 200) {
    header.classList.add('active')

  } else {
    header.classList.remove('active')

  }
}

window.addEventListener('scroll', menuHandler)

// OPEN/CLOSE DROPDOWN
const menu1DropdownHandler = document.querySelector('.js-top-dropdown_menu1')
const menu1 = document.querySelector('.menu-dropdown1')
const menu2DropdownHandler = document.querySelector('.js-top-dropdown_menu2')
const menu2 = document.querySelector('.menu-dropdown2')


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
menu1.addEventListener('mouseleave', dropdownMenu1)
menu2.addEventListener('mouseleave', dropdownMenu2)

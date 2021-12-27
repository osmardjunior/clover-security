// CHANGE MENU ON SCROLL
// const header = document.querySelector('.js-header')
// const menuDropdown = document.querySelector('.js-menu-dropdown')

// function menuHandler(){

//   if (window.scrollY > 200 && window.innerWidth > 950) {
//     header.classList.add('active')
//     menuDropdown.style.top = '7.4rem'

//   } else if(window.scrollY < 200 && window.innerWidth > 950){
//     header.classList.remove('active')
//     menuDropdown.style.top = '14rem'

//   } else if(window.scrollY < 200 && window.innerWidth < 950){
//     header.classList.remove('active')
//     menuDropdown.style.top = '11.1rem'

//   }
// }

// window.addEventListener('scroll', menuHandler)

// OPEN/CLOSE DROPDOWN
// const menu1 = document.querySelector('.menu-dropdown1')
// const menu2 = document.querySelector('.menu-dropdown2')
// const menu1DropdownHandler = document.querySelector('.js-top-dropdown_menu1')
// const menu2DropdownHandler = document.querySelector('.js-top-dropdown_menu2')
// const body = document.querySelector('body')


// function handleDropdownMenu1(event) {
//   event.preventDefault()

//   menu1.classList.toggle('active')
//   menu2.classList.remove('active')
//   body.classList.toggle('prevent-scroll')

//   if(body.classList.contains('js-prevent-scroll')){
//     body.classList.remove('js-prevent-scroll')
//   }
  
// // }

// function handleDropdownMenu2(event) {
//   event.preventDefault()

//   menu2.classList.toggle('active')
//   menu1.classList.remove('active')
//   body.classList.toggle('prevent-scroll')
  
//   if(body.classList.contains('js-prevent-scroll')){
//     body.classList.remove('js-prevent-scroll')
//   }
// }

// menu1DropdownHandler.addEventListener('click', handleDropdownMenu1)
// menu2DropdownHandler.addEventListener('click', handleDropdownMenu2)
// menu1.addEventListener('mouseleave', handleDropdownMenu1)
// menu2.addEventListener('mouseleave', handleDropdownMenu2)


// CHANGE MENU ON SCROLL
const header = document.querySelector('.js-header')

function menuHandler(){

  if (window.scrollY > 200 && window.innerWidth > 1200) {
    header.classList.add('active')

  } else if(window.scrollY < 200 && window.innerWidth > 1200){
    header.classList.remove('active')

  } else if(window.innerWidth < 1200){
    header.classList.remove('active')

  }
}

window.addEventListener('scroll', menuHandler)
window.addEventListener('resize', menuHandler)

// OPEN CLOSE HEADER DROPDOWN
const allHeaderLinks = document.querySelectorAll('.js-menu-dropdown')
const allMenuDropdown = document.querySelectorAll('.menu-dropdown')

allHeaderLinks.forEach((item) => {
  
  function dropdownHandler(event){
    const activeDropdown = document.querySelector('.js-menu-dropdown.active')

    event.preventDefault()

    allMenuDropdown.forEach((menu) => {
      if (window.scrollY > 200 && window.innerWidth > 1200) {
        menu.style.top = '6.9rem'
    
      } else if(window.scrollY < 200 && window.innerWidth > 1200){
        menu.style.top = '14rem'
    
      } else if(window.innerWidth < 1200){
        menu.style.top = '11.1rem'
    
      }
    })

    this.classList.add('active')
    activeDropdown.classList.remove('active')
  }

  item.addEventListener('click', dropdownHandler)
})

// OPEN/CLOSE DROPDOWN ON MOUSE LEAVE

// allMenuDropdown.forEach((menu) => {
//   function mouseLeaveDrodpown(){
//   const activeDropdown = document.querySelector('.js-menu-dropdown.active')

//   activeDropdown.classList.remove('active')
//   }
//   menu.addEventListener('mouseleave', mouseLeaveDrodpown)
// })
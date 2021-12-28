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


// OPEN HEADER DROPDOWN
const allHeaderLinks = document.querySelectorAll('.js-menu-dropdown')
const allMenuDropdown = document.querySelectorAll('.menu-dropdown')
const overlay = document.querySelector('.overlay')
const preventScroll = document.querySelector('main')
const pseudoElem = document.querySelector('nav.menu .nav-menu  li.active > a::after')

// allHeaderLinks.forEach((item) => {
  
//   function dropdownHandler(event){
//     const activeDropdown = document.querySelector('.js-menu-dropdown.active')

//     // event.preventDefault()
    
//     allMenuDropdown.forEach((menu) => {
//       if (window.scrollY > 200 && window.innerWidth > 1200) {
//         menu.style.top = '6.9rem'
        
//       } else if(window.scrollY < 200 && window.innerWidth > 1200){
//         menu.style.top = '14rem'
        
//       } else if(window.innerWidth < 1200){
//         menu.style.top = '11.1rem'
        
//       }
//     })
    
//     overlay.style.display = 'block'
//     preventScroll.classList.add('noscroll') 
//     this.classList.add('active')
//     // pseudoElem.style.width = "100%"
//     activeDropdown.classList.remove('active')
//   }

//   item.addEventListener('mouseover', dropdownHandler)
// })


// CLOSE DROPDOWN ON MOUSE LEAVE
allMenuDropdown.forEach((menu) => {
  function mouseLeaveDrodpown(){
  const activeDropdown = document.querySelector('.js-menu-dropdown.active')

  overlay.style.display = 'none'
  preventScroll.classList.remove('noscroll')
  activeDropdown.classList.remove('active')
  // pseudoElem.style.width = "0"
  
  }
  menu.addEventListener('mouseout', mouseLeaveDrodpown)
})

const menu1 = document.querySelector('.js-menu-dropdown1')
const menu2 = document.querySelector('.js-menu-dropdown2')

function handleDropdown1(){
  menu1.classList.add('active')
  overlay.style.display = 'block'
  preventScroll.classList.add('noscroll') 
  menu2.classList.remove('active')
}
menu1.addEventListener('mouseover', handleDropdown1)

function handleDropdown2(){
  menu2.classList.add('active')
  overlay.style.display = 'block'
  preventScroll.classList.add('noscroll') 
  menu1.classList.remove('active')
}
menu2.addEventListener('mouseover', handleDropdown2)
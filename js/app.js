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

  // main top
  if(window.innerWidth < 1060){
    main.classList.add('mobile')
  } else {
    main.classList.remove('mobile')
  }
}

window.addEventListener('scroll', menuHandler)
window.addEventListener('resize', menuHandler)


const allHeaderLinks = document.querySelectorAll('.js-menu-dropdown')
const allMenuDropdown = document.querySelectorAll('.menu-dropdown')
const overlay = document.querySelector('.overlay')
const main = document.querySelector('main')

// OPEN MENU1 / MENU2 ON MOUSEOVER
const menu1 = document.querySelector('.js-menu-dropdown1')
const menu2 = document.querySelector('.js-menu-dropdown2')

function handleDropdown1(){
  menu1.classList.add('active')
  overlay.style.display = 'block'
  main.classList.add('noscroll') 
  menu2.classList.remove('active')
}
menu1.addEventListener('mouseover', handleDropdown1)

function handleDropdown2(){
  menu2.classList.add('active')
  overlay.style.display = 'block'
  main.classList.add('noscroll') 
  menu1.classList.remove('active')
}
menu2.addEventListener('mouseover', handleDropdown2)

// CLOSE DROPDOWN ON MOUSE LEAVE
allMenuDropdown.forEach((menu) => {
  function mouseLeaveDrodpown(){
  const activeDropdown = document.querySelector('.js-menu-dropdown.active')

  overlay.style.display = 'none'
  main.classList.remove('noscroll')
  activeDropdown.classList.remove('active')
  // pseudoElem.style.width = "0"
  
  }
  menu.addEventListener('mouseout', mouseLeaveDrodpown)
})

// ACCORDION MOBILE FOOTER
const accordionContent = document.querySelectorAll('.js-accordion')
const allAccordions = document.querySelectorAll('.accordion-footer')

accordionContent.forEach((item) => {
    function accordionActive() {
      // allAccordions.forEach((accordion) => {
      //   accordion.classList.remove('active')
      // })
      
      this.parentElement.classList.toggle('active')
      
    }

    item.addEventListener('click', accordionActive)
})
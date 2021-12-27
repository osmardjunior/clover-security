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
const overlay = document.querySelector('.overlay')
const preventScroll = document.querySelector('main')

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
    
    overlay.style.display = 'block'
    preventScroll.classList.add('noscroll')

    // allHeaderLinks.forEach((menudropdown) => {
    //   if(menudropdown.classList.contains('active')){
    //     overlay.style.display = 'block'

    //   } else{
    //     overlay.style.display = 'none'
    //   }
    // })

    this.classList.add('active')
    activeDropdown.classList.remove('active')
  }

  item.addEventListener('click', dropdownHandler)
})



// OPEN/CLOSE DROPDOWN ON MOUSE LEAVE
allMenuDropdown.forEach((menu) => {
  function mouseLeaveDrodpown(){
  const activeDropdown = document.querySelector('.js-menu-dropdown.active')

  overlay.style.display = 'none'
  preventScroll.classList.remove('noscroll')
  activeDropdown.classList.remove('active')
  
  }
  menu.addEventListener('mouseleave', mouseLeaveDrodpown)
})



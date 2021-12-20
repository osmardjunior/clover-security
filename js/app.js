// CHANGE MENU ON SCROLL
// const header = document.querySelector('.js-header')

// function menuHandler(event){

//   if (window.scrollY > 200) {
//     header.classList.add('active')
//     menu1.style.top = '7.1rem'
//     menu2.style.top = '7.1rem'

//   } else {
//     header.classList.remove('active')
//     menu1.style.top = '14rem'
//     menu2.style.top = '14rem'

//   }
// }

// window.addEventListener('scroll', menuHandler)


// OPEN/CLOSE DROPDOWN
// const menu1DropdownHandler = document.querySelector('.js-top-dropdown_menu1')
// const menu1 = document.querySelector('.menu-dropdown1')
// const menu2DropdownHandler = document.querySelector('.js-top-dropdown_menu2')
// const menu2 = document.querySelector('.menu-dropdown2')



// function dropdownMenu1(event) {
//   event.preventDefault()

//   menu1.classList.toggle('active')
//   menu2.classList.remove('active')

  
// }

// function dropdownMenu2(event) {
//   event.preventDefault()
//   menu2.classList.toggle('active')
//   menu1.classList.remove('active')
  
// }

// menu1DropdownHandler.addEventListener('click', dropdownMenu1)
// menu2DropdownHandler.addEventListener('click', dropdownMenu2)
// menu1.addEventListener('mouseleave', dropdownMenu1)
// menu2.addEventListener('mouseleave', dropdownMenu2)


// ADD CLASS COLLAPSE TO ASIDE
const articleCollapse = document.querySelector('#articlesCollapse')
const dropdownAsideIcon = document.querySelector('.aside-header a img')
const asideShow = document.querySelector('.aside-articles')

function handleCollapseArticle(){

  if (window.innerWidth < 800) {
    articleCollapse.classList.add('collapse')

  } else{
    articleCollapse.classList.remove('collapse')
  }

}

window.addEventListener('resize', handleCollapseArticle)


// ROTATE ASIDE DROPDOWN ICON
const asideHeader = document.querySelector('.js-aside-header')

function handleDropdownIcon(){
  dropdownAsideIcon.classList.toggle('rotate-icon')

}

asideHeader.addEventListener('click', handleDropdownIcon)

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
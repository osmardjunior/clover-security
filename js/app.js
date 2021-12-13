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
const 
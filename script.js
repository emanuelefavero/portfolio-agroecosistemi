// DECLARE VARIABLES
// Dropdown Menu
const dropdownMenu = document.querySelector('.dropdown-menu')

// Menu Icon (Hamburger)
const menuIcon = document.querySelector('.hamburger-menu-icon')
const menuIconLineTop = document.querySelector('.hamburger-menu-icon .line-top')
const menuIconLineCenter = document.querySelector(
  '.hamburger-menu-icon .line-center'
)
const menuIconLineBottom = document.querySelector(
  '.hamburger-menu-icon .line-bottom'
)

// Dropdown Menu Anchors
const dropdownMenuAnchors = document.querySelectorAll('.dropdown-menu a')

// DECLARE DRY FUNCTION (Don't Repeat Yourself)
function toggleDropdownClasses() {
  dropdownMenu.classList.toggle('active')
  dropdownMenu.classList.toggle('opacity')

  menuIconLineTop.classList.toggle('rotate')
  menuIconLineCenter.classList.toggle('move')
  menuIconLineBottom.classList.toggle('rotate')
}

// OPEN DROPDOWN MENU WHEN HAMBURGER ICON IS CLICKED
// ANIMATE HAMBURGER ICON TO X
menuIcon.addEventListener('click', toggleDropdownClasses)

// CLOSE DROP DOWN MENU EACH TIME LINK IS CLICKED
for (let i = 0; i < dropdownMenuAnchors.length; i++) {
  dropdownMenuAnchors[i].addEventListener('click', toggleDropdownClasses)
}

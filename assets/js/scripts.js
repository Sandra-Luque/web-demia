const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show")
      toggle.classList.toggle("active-nav")
    })
  }
}

showMenu("menu-toggle", "main-nav")

const scrollTop = (topheaderId, headerId, boxAsideId) => {
  window.addEventListener("scroll", () => {
    const scrollpos = window.scrollY,
      topHeader = document.getElementById(topheaderId),
      header = document.getElementById(headerId),
      boxAside = document.getElementById(boxAsideId)
    if (header && topHeader) {
      if (scrollpos > 140) {
        header.classList.add("fixed-effect")
        topHeader.classList.add("h-hide")
      } else {
        header.classList.remove("fixed-effect")
        topHeader.classList.remove("h-hide")
      }
    }
  })
}
scrollTop("top-header", "main-header", "boxAside")

// slider
const slides = document.querySelector(".slider-draggable").children
let index = 0
function nextSlide() {
  if (index == slides.length - 1) {
    index = 0
  } else {
    index++
  }
  changeSlide()
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active")
  }
  slides[index].classList.add("active")
}

function autoPlay() {
  nextSlide()
}
let timer = setInterval(autoPlay, 4000)

// venues
let navVenues = document.getElementById("navVenues"),
  mainVenues = document.getElementById("mainVenues"),
  venuesItems = document.querySelector("#mainVenues .venues-items")
const showVenues = (e) => {
  navVenues.classList.toggle("with-submenu")
  mainVenues.classList.toggle("show")
  venuesItems.classList.toggle("animated")

  console.log(venuesItems)
}
navVenues.addEventListener("click", showVenues)

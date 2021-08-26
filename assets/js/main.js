const loader = document.getElementById("loader")
const vanish = () => {
  loader.classList.add("disppear")
}
window.addEventListener("load", vanish)

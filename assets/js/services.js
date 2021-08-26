const scrollTop = (boxAsideId) => {
  window.addEventListener("scroll", () => {
    const scrollpos = window.scrollY,
      boxAside = document.getElementById(boxAsideId);
    if (boxAsideId) {
      if (scrollpos > 140) {
        boxAside.classList.add("aside-topHeader");
      } else {
        boxAside.classList.remove("aside-topHeader");
      }
    }
  });
};
scrollTop("boxAside");

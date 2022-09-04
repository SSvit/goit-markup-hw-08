(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-header-open-btn"),
    closeMenuBtn: document.querySelector(".menu-header-close-btn"),
    menu: document.querySelector(".header-menu"),
    body: document.querySelector("body"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
export default function initHeader() {
  const body = document.querySelector('body');
  const menuLinksDesk = document.querySelectorAll('header a[href^="#"]');
  const btnMenu = document.querySelector("nav .btn-mobile");
  const navMenu = document.querySelector("nav .menu-mobile-links");
  const menuLinkMobile = document.querySelectorAll("nav .menu-mobile-links a");
  menuLinkMobile.forEach((mLink) => {
    mLink.addEventListener("click", () => {
      btnMenu.classList.remove("active");
      navMenu.classList.remove("open");
      body.classList.remove("overflow");
    });
  });
  btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    body.classList.add("overflow");
    if (btnMenu.classList.contains("active")) {
      navMenu.classList.add("open");
    } else {
      navMenu.classList.remove("open");
    }
  });
  menuLinksDesk.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const element = e.target;
      const id = element.getAttribute("href");
      const sectionTo = document.querySelector(id).offsetTop;
      window.scroll({
        top: sectionTo,
        behavior: "smooth",
      });
    });
  });
}
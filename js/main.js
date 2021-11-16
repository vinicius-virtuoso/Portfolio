document.addEventListener('DOMContentLoaded', () => {
  let timeLine = gsap.timeline();

  timeLine
    .from(".menu-1", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
    })
    .from(".menu-2", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-3", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-4", {
      duration: 1,
      opacity: 0,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-5", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
})
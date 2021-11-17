document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('header a[href^="#"]');
  console.log(menuLinks)

  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const element = e.target;
      const id = element.getAttribute('href');
      const sectionTo = document.querySelector(id).offsetTop;
      window.scroll({
        top: sectionTo,
        behavior: "smooth",
      })
    })
  })


  let timeLine = gsap.timeline();

  timeLine
    .from(".menu-1", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
      ease: "power3.out",
    })
    .from(".menu-2", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-3", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-4", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".menu-5", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".bg-hero", {
      duration: 1,
      opacity: 0,
      y: -200,
      stagger: { each: 0.3 },
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".box-text h1", {
      duration: 1,
      opacity: 0,
      y: 250,
      stagger: { each: 0.3 },
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".box-text .text-1", {
      duration: 1.5,
      opacity: 0,
      x: -250,
      stagger: { each: 0.3 },
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".box-text .text-2", {
      duration: 1.5,
      opacity: 0,
      x: 250,
      stagger: { each: 0.3 },
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".box-text .text-3", {
      duration: 1,
      opacity: 0,
      y: 250,
      stagger: { each: 0.3 },
      delay: 0,
      ease: "power3.out",
    }, "-=0.8")
    .from(".container-item img", {
      duration: 2,
      opacity: 0,
      y: 250,
      ease: "power3.out",
    }, "-=0.8")


  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#my-works div", {
    duration: 1,
    y: 350,
    opacity: 0,
    stagger: { each: 0.4 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#my-works",
    }
  }, "-=0.8");
  gsap.from("#getintouch h2", {
    duration: 1,
    x: 650,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#getintouch",
    }
  });
  gsap.from("#getintouch h3", {
    duration: 1,
    x: 650,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#getintouch h3",
    }
  });
  gsap.from(".social *", {
    duration: 1,
    x: 250,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#getintouch",
    }
  });
})
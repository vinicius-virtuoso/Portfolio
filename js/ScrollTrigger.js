export default function initScrollTrigger() {
  document.addEventListener("DOMContentLoaded", () => {
    let timeLine = gsap.timeline();
    timeLine
      .from(".menu-1", {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: "power3.out",
      })
      .from(
        ".menu-2",
        {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".menu-3",
        {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".menu-4",
        {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".menu-5",
        {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".menu-mobile",
        {
          duration: 1,
          opacity: 0,
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".bg-hero",
        {
          duration: 1,
          opacity: 0,
          y: -200,
          stagger: { each: 0.3 },
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".box-text h1",
        {
          duration: 1,
          opacity: 0,
          y: 250,
          stagger: { each: 0.3 },
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".box-text .text-1",
        {
          duration: 1,
          opacity: 0,
          x: -250,
          stagger: { each: 0.3 },
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".box-text .text-2",
        {
          duration: 1,
          opacity: 0,
          x: 250,
          stagger: { each: 0.3 },
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".box-text .text-3",
        {
          duration: 1,
          opacity: 0,
          y: 250,
          stagger: { each: 0.3 },
          delay: 0,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".container-item img",
        {
          duration: 1,
          opacity: 0,
          y: 250,
          ease: "power3.out",
        },
        "-=0.8"
      );

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".box-anime *", {
      duration: 0.3,
      y: 250,
      opacity: 0,
      stagger: { each: 0.1 },
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
      },
    });
    gsap.from(
      "#my-works div",
      {
        duration: 0.5,
        y: 250,
        opacity: 0,
        stagger: { each: 0.2 },
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#my-works",
        },
      },
      "-=0.8"
    );
    gsap.from("#getintouch h2", {
      duration: 0.5,
      y: 250,
      opacity: 0,
      stagger: { each: 0.2 },
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#getintouch",
      },
    });
    gsap.from("#getintouch h3", {
      duration: 0.5,
      y: 250,
      opacity: 0,
      stagger: { each: 0.2 },
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#getintouch h3",
      },
    });
    gsap.from(".social *", {
      duration: 0.5,
      y: 250,
      opacity: 0,
      stagger: { each: 0.2 },
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#getintouch",
      },
    });
  });

}
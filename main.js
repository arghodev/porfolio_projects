function swiper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swiper();

function loader() {
  let tl = gsap.timeline();

  tl.from(".loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    color: "#00ffff",
  });
  tl.to(".loader h3", {
    opacity: 0,
    x: -10,
    y: -20,
    duration: 1,
    stagger: 0.1,
  });
  tl.to(".loader", {
    opacity: 0,
  });

  tl.from(".page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    delay: 0.5,
  });
  tl.from(".page1-content h3", {
    y: -100,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
  });

  tl.to(".loader", {
    display: "none",
  });
}
loader();

function scroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
scroll();

function cursorEffect() {
  let csr = document.querySelector(".cursor");
  let page1content = document.querySelector(".page1");

  page1content.addEventListener("mousemove", function (dets) {
    gsap.to(csr, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1content.addEventListener("mouseleave", function () {
    gsap.to(csr, {
      opacity: 0,
      scale: 0,
    });
  });
  page1content.addEventListener("mouseenter", function () {
    gsap.to(csr, {
      opacity: 1,
      scale: 1,
    });
  });
}
cursorEffect();

function page2animation() {
  gsap.from(".heading", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      scrub: 2,
      start: "top 40%",
      end: "top 30%",
      // markers: true,
    },
  });
  gsap.from("#para", {
    y: 300,
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 40%",
      end: "top 30%",
      scrub: 2,

      // markers: true,
    },
  });
  gsap.from(".break", {
    width: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      scrub: 2,
      start: "top 50%",
      end: "top 30%",
      // markers: true,
    },
  });
}
page2animation();

function page3() {
  let tl = gsap.timeline();

  tl.from(".page3 h4", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      scrub: 5,
      start: "top 30%",
      end: "top 30%",
      // markers: true,
    },
  });
  tl.from("#p3-title", {
    x: 500,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      scrub: 5,
      start: "top 30%",
      end: "top 30%",
      // markers: true,
    },
  });
}
page3();

function page4() {
  gsap.from(".v-heading", {
    x: -100,
    scale: 3,
    // duration: 5,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      scrub: 2,
      start: "top 40%",
      end: "top 30%",
      // markers: true,
    },
  });
}
page4();

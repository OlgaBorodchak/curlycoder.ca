window.addEventListener("scroll", scroll);
window.addEventListener("scroll", activeLink);
window.addEventListener("load", footerAnimation);

function scroll() {
  const header = document.querySelector("header");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
}

function activeLink() {
  const navLinks = document.querySelectorAll(".nav-list-item");
  const sections = document.querySelectorAll("section");

  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    let top = section.offsetTop - 180;
    let bottom = top + section.offsetHeight;
    let id = section.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < bottom) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      document
        .querySelector('nav a[href="#' + id + '"]')
        .classList.add("active");
    }
  });
}

function footerAnimation() {
  const tl = gsap.timeline({repeat: -1})
    tl.from(".svg", {y: 18, autoAlpha:0, duration: 0.8, stagger: 0.8})
      .to(".svg", {y: -18, autoAlpha:0, duration: 0.8, stagger: 0.8}, 0.8)
}

const menuToggle = document.querySelector(".menu-toggle");
const navbarMobile = document.querySelector(".navbar-mobile");
const navLinksMobile = document.querySelectorAll(".nav-list-item-mobile");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open-btn");
  navbarMobile.classList.toggle("open-list");
});

function removeActiveClass() {
  navLinksMobile.forEach((link) => link.classList.remove("active"))
}

function closeNavbarMobile() {
  menuToggle.classList.remove("open-btn");
  navbarMobile.classList.remove("open-list");
}

navLinksMobile.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveClass();
    link.classList.add("active");
    closeNavbarMobile();
    removeActiveClass();
  })
})

//scroll-down-btn
const scrollBtn = document.querySelector(".scroll-btn-svg");

scrollBtn.addEventListener("click", () => {
  window.scrollBy({
    top: 818,
    behavior: "smooth",
  });
});

//Animation
const frontEndText = new SplitType(".front-end-text", {
  types: "words, chars",
});
chars = frontEndText.chars;

gsap.from(chars, {
  y: -200,
  stagger: 0.08,
  delay: 0.2,
  duration: 1.8,
  ease: "back.out",
  autoAlpha:0,
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

const headings = gsap.utils.toArray('.fadeInLeft');
headings.forEach(heading => {
  gsap.from(heading, { 
    xPercent: -8,
    opacity: 0,
    scrollTrigger: {
      trigger: heading,
      start: "clamp(top 85%)",
      end: "clamp(bottom 100%)",
      toggleActions: "play none reverse none",
    }
  })
});

gsap.from(".icon", { 
  delay: .5,
  scale: 0,
  duration: 1.5, 
  scrollTrigger: {
    trigger: ".skill-icons",
    start: "clamp(top bottom)",
    end: "clamp(bottom top)",
  }
})

const fadeInUp = gsap.utils.toArray('.fadeInUp');
fadeInUp.forEach(section => {
  gsap.from(section, { 
    y: 250,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: section,
      start: "clamp(-250 80%)",
      end: "clamp(bottom bottom)",
    }
  })
});

const tl = gsap.timeline();

function init() {
  tl.from(".banner", {autoAlpha:0, duration: 1})
    .from(".developer-text", { y: 200, opacity: 0, ease: "bounce.out", duration: 2})
    .from(".logo", { y: -100, autoAlpha:0, duration: 1 }, "-=1")
    .from(".menu-toggle", { y: -100, autoAlpha:0, duration: 1 }, "-=1")
    .from(".scroll-btn-link", {y: 100, opacity: 0, duration: 1}, "-=1")
    .fromTo(
    ".scroll-btn-svg",
    { y: -7, duration: 0.5 },
    { y: 7, opacity: 1, duration: 0.5, repeat: -1, yoyo: true});
  }

  window.addEventListener("load", function() { 
    init();
});
    

//Hover overlay on mobile touch

const projects = document.querySelectorAll('.project');

projects.forEach((project) => {

  const closeOverlayBtn = project.querySelector(".close-overlay")
 
  project.addEventListener("click", (e) => {
    e.stopPropagation();
    project.classList.add('mobileoverlay');
  }) 
  
  closeOverlayBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    project.classList.remove('mobileoverlay');
  })
}) 










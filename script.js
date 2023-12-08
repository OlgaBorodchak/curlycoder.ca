
window.addEventListener("scroll", scroll);
window.addEventListener("scroll", activeLink);



function scroll() {
    const header = document.querySelector("header");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add("bg");
    } else { 
        header.classList.remove("bg");
    }
}




function activeLink() {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let top = section.offsetTop - 180;
        let bottom = top + section.offsetHeight;
        let id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition < bottom) {
            navLinks.forEach(links => {
                links.classList.remove("active");
            });
            document.querySelector('nav a[href="#' + id + '"]').classList.add("active");
        }
    });
}

const menuToggle = document.querySelector(".menu-toggle");
const navBarMobile = document.querySelector(".navbar-mobile");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open-btn")
    navBarMobile.classList.toggle("open-list")
});


//text 

let frontEndText = new SplitType(".front-end-text", { types: 'words, chars' });
chars = frontEndText.chars;

gsap.from(chars, {
    y: -115,
    stagger: 0.08,
    delay: 0.2,
    duration: 1.8,
    ease: "back.out",
    repeat: 3,
    opacity: 0,
}) 

//scroll-down-btn
gsap.from(".scroll-btn", {y:"-7", repeat:-1, yoyo:true});

let scrollBtn = document.querySelector(".scroll-btn");

scrollBtn.addEventListener("click", () => {
    window.scrollBy({
    top: 818,
    behavior: "smooth",
    });
});




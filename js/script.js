const navToggle = document.querySelector('.nav-toggle');
const navLinks = gsap.utils.toArray('.nav-link');

let navLinkAnimation = gsap.to(navLinks, {opacity: 1, y: 0, duration: 0.2, ease: 'power4.in', stagger: 0.1, paused: true})
let navToggleAnimation = gsap.timeline({paused: true});

navToggleAnimation
    .to(navToggle, { backgroundColor: "black", color: "rgb(236, 244, 255)", duration: 0.25, ease: 'power4.in' })

let isOpen = false;
navToggle.addEventListener('click', () => {
    if (!isOpen) {
      navToggleAnimation.play()
      navLinkAnimation.play()
    } else {
      navToggleAnimation.reverse()
      navLinkAnimation.reverse()
    }
    isOpen = !isOpen;
});


let tl = gsap.timeline();

// Navigation container animation
tl.from(".nav-container", { y: -150, duration: 0.5, ease: 'power3.out' });

// Introduction section animation
tl.addLabel("introduction")
  .from(".introduction", { y: -100, duration: 0.5, ease: "power2.in" }, "introduction")
  .to(".introduction", { opacity: 1, duration: 0.3, ease: "power2.in" }, "<0.3")
  .from(".hr", { width: "0%", duration: 0.75, ease: "power4.out" })

// Background text animation
tl.addLabel("backgroundText", ">-0.5")
  .from(".background-text", { x: -800, duration: 1, ease: "power4.out", stagger: 0.2 }, "backgroundText");

// Skills section animation
tl.addLabel("skills", "-=1")
  .from(".skills-container", { x: 300, opacity: 0 }, "skills")
  .from(".skill", { y: 250, duration: 0.5, stagger: 0.05, ease: "power4.in" }, "<")


// Resume section animation
tl.addLabel("resume", "-=1.1")
  .from("#resume", { x: -400, opacity: 0, ease: "power4.inOut"}, "skills")

// Projects heading animation
tl.addLabel("projects")
  .from("#eduflip-card", {x: -500, opacity: 0, duration: 0.5, ease: 'power2.in'}, ">-0.5")
  .from("#snuscheck-card", {x: 500, opacity: 0, duration: 0.5, ease: 'power2.in'}, ">-0.5")

// Hand animation
gsap.set(".hand", {x: 72, y: -45, scaleX: -1})
tl.to(".hand", { rotation: 25, duration: 0.25, ease: "power3.inOut", yoyo: true, repeat: 9 }, "<1");


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#eduflip-video');
});

gsap.to('.main-overlay', 1.5, {
    height: 0,
    duration: 1,
    delay: .2,
    ease: Power4.in
});

gsap.to('.main-overlay p', 1.5, {
    opacity: 0,
    duration: 1,
    delay: .2
});

gsap.to('.text-overlay', 1.5, {
    left: '100%',
    duration: .5,
    delay: .1
});

gsap.to('.bg-overlay', 1.5, {
    width:'50%',
    duration: .5,
    delay: 1.5
});

gsap.to('.para .text', 1.5, {
    top:0,
    duration: .5,
    delay: 1.8
});

gsap.to('.head', 1.5, {
    y:0,
    duration: .5,
    delay: 1.8
});

gsap.to('.animate', 1.5, {
    x:0,
    y:0,
    scale:1,
    opacity:1,
    duration: .5,
    delay: 2.2
});
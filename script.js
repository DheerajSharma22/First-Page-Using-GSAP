const tl = gsap.timeline();



tl.from(".heading-div h2", {
    y: 500,
    duration: 1,
    stagger: 1,
})

tl.from(".insigtDiv p", {
    y: -30,
    duration: .7,
    opacity: 0,
})

tl.from("nav img, nav button", {
    y: -100,
    duration: .7,
    opacity: 0
})

tl.from(".scrollBtn", {
    duration: .2,
    opacity: 0
})

tl.to(".scrollBtn", {
    y: 10,
    yoyo: true,
    duration: .3,
    repeat: -1
})
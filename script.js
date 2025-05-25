gsap.to(".page-2-child",{
    stagger:0.5,
    opacity:1,
    rotate: 0,
    scrollTrigger:{
        scroller:"body",
        trigger:".page-2-child",
        // markers:true,
        start:"top 20%",
        end:"top 0%",
        scrub:5,


    },
})
var t1= gsap.timeline();

t1.from("#nav",{
    y : -90,
    duration : 0.7,
    delay : 0.8
});
t1.from(".title", {
    x:-1000,
    duration: 0.8,
    stagger: 0.8,
    opacity:0,
});
t1.from("img", {
    x:100,
    rotate:45,
    opacity:0,
    stagger:0.8,
});
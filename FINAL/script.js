gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(TextPlugin);

//for opening animation subheading

const typewriter = document.getElementById("typewriter");

gsap.to(typewriter,{
    duration: 5, 
    text: {
        value: "Short Essays and Memories from Marc Andre Lam",
        oldClass: "start",
        newClass: "end",
    },
});

//scrollTrigger hero animation 

gsap.to(".mask", {
    scrollTrigger: {
      trigger: "#scrollOpen",
      scrub: true,
      pin: true,
    },
    scale: .7,
    height: 300,
  });

const entries = gsap.utils.toArray("#horizontal .entries"); 

gsap.to(entries, {
  xPercent: -100* (entries.length -1),
  scrollTrigger: {
    trigger: "#horizontal", 
    pin: true, 
    scrub: true,
    end: "+=5000"
  }
})


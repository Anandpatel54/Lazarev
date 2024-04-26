function makeAnimationNav(){
    let nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function () {
  var tl = gsap.timeline();
  tl.to("#nav-bottom", {
    height: "21vh",
  });
  tl.to(".nav-part2 h5", {
    display: "block",
  });
  tl.to(".nav-part2 h5 span", {
    y: 0,
    //duration: 0.3,
    stagger: {
        amount: 0.6,
    }
    
  });
});

nav.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
        y: 25,
        //duration: 0.3,
        stagger: {
            amount: 0.2,
        }
        
      });
    tl.to("#nav-bottom", {
      height: "0vh",
      duration: 0.2,
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });

  });

}




makeAnimationNav();
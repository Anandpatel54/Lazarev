function makeAnimationNav() {
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
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      //duration: 0.3,
      stagger: {
        amount: 0.2,
      },
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

function page1Animation() {
  var rightElem = document.querySelectorAll(".right-elem");
  rightElem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 110,
      });
    });
  });
}

function makeVideopart() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");
  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

makeAnimationNav();
page1Animation();
makeVideopart();

const clickMeBtn = document.querySelector("#click-me-btn");
const flower = document.querySelector(".flower");

const tl = new TimelineMax();

function animate() {
  tl.to("#click-me-btn", 0.3, { ease: Power4.easeOut, autoAlpha: 0 }, "+=0.5");

  tl.to(".flower", 1, { ease: Power4.easeOut, display: "block" }, "+=0.5");

  tl.to(".flower", 2, { ease: Power4.easeOut, y: 320 }, "+=1");

  tl.to("#letter", 3, { ease: Back.easeOut, autoAlpha: 1, scale: 1 }, "-=2");

  tl.to("#picnamin", 1, { ease: Back.easeOut, autoAlpha: 1 });
}

// clickMeBtn.addEventListener("click", function () {
//   gsap.to("#click-me-btn", { duration: 1, display: none });
//   gsap.to(".flower", { duration: 1, display: "block" });
// });

clickMeBtn.addEventListener("click", animate);

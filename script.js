const bar = document.querySelector(".bar");
const navbar = document.querySelector(".second_nav ");
bar.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
  blur.style.left = e.x - 200 + "px";
  blur.style.top = e.y - 200 + "px";
});

gsap.to(".navbar_container", {
  backgroundColor: "black",
  duration: 2,
  height: "110px",
  scrollTrigger: {
    trigger: ".navbar_container",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main_content", {
  backgroundColor: "black",

  scrollTrigger: {
    trigger: ".main_content",
    scroller: "body",
    start: "top -25%",
    end: "top -75%",
    scrub: 1,
  },
});

gsap.from(".about_us img,.about_us_in", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about_us",
    scroller: "body",
    start: "top 55%",
    end: "top 50%",
    scrub: 3,
  },
});
gsap.from(".cards", {
  scale: 0.8,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    top: "60%",
    end: "55%",
    scrub: 1,
  },
});
gsap.from(".colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    top: "50%",
    end: "45%",
    scrub: 1,
  },
});

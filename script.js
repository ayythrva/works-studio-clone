function loading() {
  let timeline = gsap.timeline();

  timeline.to("#yellow-div1", {
    top: "-100%",
    duration: 0.5,
    // delay : 0.5,
    ease: "expo.out",
  });

  timeline.from(
    "#yellow-div2",
    {
      top: "100%",
      duration: 0.5,
      delay: 0.5,
      ease: "expo.out",
    },
    "eksaath"
  );

  timeline.to(
    "#loader h1",
    {
      color: "black",
      delay: 0.5,
    },
    "eksaath"
  );

  timeline.to("#loader", {
    display: "none",
  });

  timeline.to("#loader", {
    opacity: 0,
  });
}

loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


document.querySelector("#footerr h2").addEventListener("click", () => {
  scroll.scrollTo(0);
})


let elements = document.querySelectorAll(".elem");
let page2 = document.querySelector("#page2");

elements.forEach(function(elem) {
  elem.addEventListener("mouseenter", function () {
    let bgImg = elem.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgImg})`;
  })
});

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parralaxEffect = (sections) => {
  const bck = document.querySelectorAll(`${sections} .background`);
  let bckAnimations = [];

  const bckStartAnimation = () => {
    bck.forEach((el, index) => {
      const bckHeightDiff = el.offsetHeight - el.parentElement.offsetHeight;
      const bckWidthDiff = el.offsetWidth - el.parentElement.offsetWidth;
      const bckDirection = el.getAttribute("data-direction");
      let animDir = {};
      switch (bckDirection) {
        case "left":
          if (bckWidthDiff <= 0) {
            console.warn(
              `Warning : ${el.parentElement.id} ".background" width <= 100%`
            );
          }
          animDir = {
            startX: 0,
            endX: `-${bckWidthDiff}`,
            startY: 0,
            endY: 0,
          };
          break;
        case "right":
          if (bckWidthDiff <= 0) {
            console.warn(
              `Warning : ${el.parentElement.id} ".background" width <= 100%`
            );
          }
          animDir = {
            startX: `-${bckWidthDiff}`,
            endX: 0,
            startY: 0,
            endY: 0,
          };
          break;
        case "static":
          animDir = {
            startX: 0,
            endX: 0,
            startY: 0,
            endY: 0,
          };
          break;
        case "down":
          if (bckHeightDiff <= 0) {
            console.warn(
              `Warning : ${el.parentElement.id} ".background" height <= 100%`
            );
          }
          animDir = {
            startX: 0,
            endX: 0,
            startY: 0,
            endY: `-${bckHeightDiff}`,
          };
          break;
        default:
          if (bckHeightDiff <= 0) {
            console.warn(
              `Warning : ${el.parentElement.id} ".background" height <= 100%`
            );
          }
          animDir = {
            startX: 0,
            endX: 0,
            startY: `-${bckHeightDiff}`,
            endY: 0,
          };
      }

      bckAnimations[index] = gsap.fromTo(
        el,
        {
          x: animDir.startX,
          y: animDir.startY,
        },
        {
          scrollTrigger: {
            trigger: el,
            start: "-100% top",
            end: "200% top",
            scrub: true,
          },
          x: animDir.endX,
          y: animDir.endY,
          ease: "none",
        }
      );
    });
  };

  if (bck.length) {
    bckStartAnimation(sections);
  } else {
    console.warn(`No section with .background on this page !`);
  }

  /* Resize */
  let resizeTimeOut = null;
  const reportResize = () => {
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(function () {
      bckAnimations.forEach((el) => {
        el.kill();
      });
      bckAnimations = [];
      bckStartAnimation(sections);
    }, 500);
  };
  window.addEventListener("resize", reportResize);
};

export default parralaxEffect;

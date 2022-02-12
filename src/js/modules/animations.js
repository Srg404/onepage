import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animations = () => {
  const asimov2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-asimov-2",
        pin: true,
        start: "top top",
        end: "center top",
        scrub: true,
      },
    })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: -1, x: "-110%" },
      { y: -1, x: 0 },
      0
    )
    .set("#section-asimov-2 .element-1", { y: "-79%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "100%", x: "110%" },
      { y: "100%", x: 0 },
      1
    )
    .set("#section-asimov-2 .element-1", { y: "-59%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "200%", x: "-110%" },
      { y: "200%", x: 0 },
      2
    )
    .fromTo(
      "#section-asimov-2 .quote",
      { autoAlpha: 0, x: "-150%" },
      { autoAlpha: 1, x: 0 },
      2
    )
    .set("#section-asimov-2 .element-1", { y: "-39%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "300%", x: "110%" },
      { y: "300%", x: 0 },
      3
    )
    .set("#section-asimov-2 .element-1", { y: "-19%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "400%", x: "-110%" },
      { y: "400%", x: 0 },
      4
    )
    .set("#section-asimov-2 .element-1", { y: "1%" })
    .set("#section-asimov-2 .element-2", { y: "0", x: "-110%" });

  const arendt = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-arendt-1",
      pin: true,
      start: "top top",
      end: "center top",
      scrub: true,
    },
  });
};

export default animations;

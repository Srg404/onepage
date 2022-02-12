import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animations = () => {
  console.log("hello World of Animations !");

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
      { y: 0, x: "-110%" },
      { y: 0, x: 0 },
      0
    )
    .set("#section-asimov-2 .element-1", { y: "-82.5%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "100%", x: "110%" },
      { y: "100%", x: 0 },
      1
    )
    .set("#section-asimov-2 .element-1", { y: "-62.5%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "200%", x: "-110%" },
      { y: "200%", x: 0 },
      2
    )
    .fromTo(
      "#section-asimov-2 .quote",
      { autoAlpha: 0, x: -100 },
      { autoAlpha: 1, x: 0 },
      2
    )
    .set("#section-asimov-2 .element-1", { y: "-42.5%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "300%", x: "110%" },
      { y: "300%", x: 0 },
      3
    )
    .set("#section-asimov-2 .element-1", { y: "-22.5%" })
    .fromTo(
      "#section-asimov-2 .element-2",
      { y: "400%", x: "-110%" },
      { y: "400%", x: 0 },
      4
    )
    .set("#section-asimov-2 .element-1", { y: "0" })
    .set("#section-asimov-2 .element-2", { y: "0", x: "-110%" });
};

export default animations;

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animations = () => {
  console.log("hello World of Animations !");

  const asimov2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-asimov-2",
      pin: true,
    },
  });
};

export default animations;

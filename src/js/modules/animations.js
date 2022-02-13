import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import particlesJSConfig from "../json/particlesjs-config.json";
import "particles.js/particles";

gsap.registerPlugin(ScrollTrigger);

particlesJS("smokeEffect", particlesJSConfig);

const animations = () => {
  const asimov2 = gsap
    .timeline({
      default: {
        ease: "power1.out",
      },
      scrollTrigger: {
        trigger: "#section-asimov-2",
        pin: false,
        start: "top center",
        end: "40% center",
        scrub: 1,
      },
    })
    .fromTo(
      "#section-asimov-2 .quote",
      {
        autoAlpha: 0,
        y: "-150%",
        filter: "blur(5px)",
        transform: "rotate(-2.5deg)",
      },
      { autoAlpha: 1, y: 0, filter: "blur(0px)", transform: "rotate(0deg)" }
    );

  const arendt = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-arendt-1",
      pin: true,
      start: "top top",
      end: "center top",
      scrub: true,
    },
  });

  const king = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-king-1",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    })
    .fromTo("#section-king-1 .quote", { y: "-20%" }, { y: 0 });

  const brient1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-brient-1",
        pin: true,
        scrub: true,
      },
    })
    .fromTo(
      "#section-brient-1 .element",
      { maskPosition: `0 0` },
      { maskPosition: "200% 0" }
    );

  const widthChomsky1 =
    document.querySelector("#section-chomsky-1").offsetWidth;
  const heightChomsky1 =
    document.querySelector("#section-chomsky-1").offsetHeight / 5;

  const chomsky1 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-chomsky-1",
        pin: true,
        scrub: true,
      },
    })
    .set("#section-chomsky-1 .element-1", { maskSize: `100% 0` })
    .fromTo(
      "#section-chomsky-1 .element-2",
      { maskPosition: `-${widthChomsky1 + 200}px -15px` },
      { maskPosition: `-20px -15px` }
    )
    .set("#section-chomsky-1 .element-1", { maskSize: `100% 21%` })
    .fromTo(
      "#section-chomsky-1 .element-2",
      { maskPosition: `${widthChomsky1}px ${heightChomsky1}px` },
      { maskPosition: `0px  ${heightChomsky1}px` }
    )
    .set("#section-chomsky-1 .element-1", { maskSize: `100% 41%` })
    .fromTo(
      "#section-chomsky-1 .element-2",
      { maskPosition: `-${widthChomsky1 + 200}px ${heightChomsky1 * 2}px` },
      { maskPosition: `0px  ${heightChomsky1 * 2}px` }
    )
    .set("#section-chomsky-1 .element-1", { maskSize: `100% 61%` })
    .fromTo(
      "#section-chomsky-1 .element-2",
      { maskPosition: `${widthChomsky1 + 200}px ${heightChomsky1 * 3}px` },
      { maskPosition: `0px  ${heightChomsky1 * 3}px` }
    )
    .set("#section-chomsky-1 .element-1", { maskSize: `100% 81%` })
    .fromTo(
      "#section-chomsky-1 .element-2",
      { maskPosition: `-${widthChomsky1 + 200}px ${heightChomsky1 * 4}px` },
      { maskPosition: `0px  ${heightChomsky1 * 4}px` }
    )
    .set("#section-chomsky-1 .element-1", { maskSize: `100% 101%` });
};

export default animations;

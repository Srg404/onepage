import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log("Script2!!!!!!!");

const firstBackground = document.querySelector("#first-section .background");
const firstHeightDiff =
  firstBackground.offsetHeight - firstBackground.parentElement.offsetHeight;

const secondBackground = document.querySelector("#second-section .background");
const secondHeightDiff =
  secondBackground.offsetHeight - secondBackground.parentElement.offsetHeight;
const secondWidthDiff =
  secondBackground.offsetWidth - secondBackground.parentElement.offsetWidth;

const sectionsAnimations = () => {
  gsap.fromTo(
    "#first-section .background",
    {
      x: 0,
      y: 0,
    },
    {
      scrollTrigger: {
        trigger: "#first-section",
        start: "-100% top",
        end: "200% top",
        scrub: true,
        markers: false,
      },
      x: 0,
      y: -firstHeightDiff,
      ease: "none",
    }
  );

  gsap.fromTo(
    "#first-section .mark",
    {
      x: "-5%",
    },
    {
      scrollTrigger: {
        trigger: "#first-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      x: "10%",
      ease: "none",
    }
  );

  const second = gsap.timeline({
    default: {
      ease: "power1.out",
    },
    scrollTrigger: {
      trigger: "#second-section",
      scrub: true,
      pin: false,
    },
  });

  second
    .fromTo(
      "#second-section h1",
      { autoAlpha: 0, x: -50 },
      { autoAlpha: 1, x: 0 }
    )
    .fromTo(
      "#second-section p",
      { autoAlpha: 0, x: 25 },
      { autoAlpha: 1, x: 0 },
      "-=0.5"
    );

  gsap.fromTo(
    "#second-section .background",
    {
      x: -secondWidthDiff,
      y: 0,
    },
    {
      scrollTrigger: {
        trigger: "#second-section",
        start: "-100% top",
        end: "200% top",
        scrub: true,
      },
      x: 0,
      y: -secondHeightDiff,
      ease: "none",
    }
  );

  const third = gsap.timeline({
    default: {
      ease: "power1.out",
    },
    scrollTrigger: {
      trigger: "#third-section",
      pin: true,
    },
  });

  const thirdText = gsap.timeline({
    default: {
      ease: "power1.out",
    },
    scrollTrigger: {
      trigger: "#third-section h1",
      start: "-50% 0%",
      end: "100% 0%",
      scrub: true,
      markers: false,
    },
  });

  thirdText
    .fromTo(
      "#third-section h1",
      { autoAlpha: 0, x: -50 },
      { autoAlpha: 1, x: 0 }
    )
    .fromTo(
      "#third-section p",
      { autoAlpha: 0, x: 25 },
      { autoAlpha: 1, x: 0 },
      "-=0.5"
    );

  const thirdMask = gsap.timeline({
    default: {
      ease: "power1.out",
    },
    scrollTrigger: {
      trigger: "#third-section",
      start: "top top",
      end: "center top",
      scrub: true,
    },
  });

  thirdMask
    .fromTo("#third-section .brush", { y: 0, x: "-110%" }, { y: 0, x: 0 }, 0)
    .set("#third-section .mask", { y: "-80%" })
    .fromTo(
      "#third-section .brush",
      { y: "100%", x: "110%" },
      { y: "100%", x: 0 },
      1
    )
    .set("#third-section .mask", { y: "-60%" })
    .fromTo(
      "#third-section .brush",
      { y: "200%", x: "-110%" },
      { y: "200%", x: 0 },
      2
    )
    .set("#third-section .mask", { y: "-40%" })
    .fromTo(
      "#third-section .brush",
      { y: "300%", x: "110%" },
      { y: "300%", x: 0 },
      3
    )
    .set("#third-section .mask", { y: "-20%" })
    .fromTo(
      "#third-section .brush",
      { y: "400%", x: "-110%" },
      { y: "400%", x: 0 },
      4
    )
    .set("#third-section .mask", { y: "0" })
    .set("#third-section .brush", { y: "0", x: "-110%" });

  const fifthMask = gsap.timeline({
    default: {
      ease: "power1.out",
    },
    scrollTrigger: {
      trigger: "#fifth-section",
      pin: true,
      scrub: true,
      markers: false,
    },
  });

  const maskerWidth = document.querySelector("#fifth-section .masker")
    .parentElement.offsetWidth;

  fifthMask.fromTo(
    "#fifth-section .masker",
    { maskPosition: `-${maskerWidth * 2}px 0` },
    { maskPosition: "0px 0" }
  );
};

const textEffect = (element) => {
  const chars =
    "░▒▓▀█▄■abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&*+/Ø?@"; // ╣╗╝║╚╔╠
  const target = document.querySelector(element);
  const tContent = target.textContent;

  const transform = (word) => {
    const newWord = word.split("").map((letter, i) => {
      if (letter == " ") {
        return letter;
      } else {
        const newLetter = chars[Math.floor(Math.random() * chars.length)];
        return newLetter;
      }
    });
    return newWord.join("");
  };

  const effect = (target) => {
    target.innerHTML = transform(tContent);
  };

  let anim = null;
  let i = 0;

  const interval = () => {
    anim = setInterval(() => {
      i++;
      // console.log(i);
      if (i < 2500000000) {
        effect(target);
      } else {
        i = 0;
        clearInterval(anim);
        target.innerHTML = tContent;
      }
    }, 33);
  };

  target.addEventListener("mouseleave", interval);
  target.addEventListener("mouseenter", () => {
    i = 0;
    clearInterval(anim);
    target.innerHTML = tContent;
  });

  interval();
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    sectionsAnimations();
    textEffect(".text-effect");
    textEffect(".p-effect");
  }
};

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parralaxEffect from "./modules/parallax";
import textEffect from "./modules/textEffect";

gsap.registerPlugin(ScrollTrigger);

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("Document ready !");
    parralaxEffect("section");
    textEffect("#section-asimov-1 .text");
  }
};

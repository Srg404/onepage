import parralaxEffect from "./modules/parallax";
import textEffect from "./modules/textEffect";
import animations from "./modules/animations";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("Document ready !");
    parralaxEffect("section");
    textEffect("#section-asimov-1 .quote");
    animations();
  }
};

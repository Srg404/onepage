import parralaxEffect from "./modules/parallax";
import textEffect from "./modules/textEffect";
import animations from "./modules/animations";
import textrix from "./modules/textrix";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("Document ready !");
    animations();
    textEffect("#section-asimov-1 .quote");
    parralaxEffect("section");

    const effect = new textrix(".myText", {
      autoStart: true,
      extraChar: "$^%azerty-^[]",
    });
  }
};

import parralaxEffect from "./modules/parallax";
// import textEffect from "./modules/textEffect";
import animations from "./modules/animations";
import textrix from "./modules/textrix";

const textEffect = () => {
  const extraChar = "░▒▓▀█▄■";
  // Text effect
  const asimovTxt = new textrix("#section-asimov-1 .text", {
    autoStart: true,
    extraChar: extraChar,
  });
  const asimovAuthor = new textrix("#section-asimov-1 .author", {
    autoStart: true,
    extraChar: extraChar,
  });

  document
    .querySelector("#section-asimov-1 .text")
    .addEventListener("mouseenter", () => {
      asimovTxt.start();
      asimovAuthor.start();
    });
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("Document ready !");
    animations();
    parralaxEffect("section");

    // textEffect("#section-asimov-1 .quote");
    textEffect();
  }
};

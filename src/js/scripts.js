import parralaxEffect from "./modules/parallax";
import textEffect from "./modules/textEffect";
import animations from "./modules/animations";
import textrix from "./modules/textrix";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("Document ready !");
    animations();
    // textEffect("#section-asimov-1 .quote");
    parralaxEffect("section");

    const effect = new textrix(
      ".myText",
      {
        autoStart: false,
        extraChar: "░▒▓▀█▄■",
      },
      function () {
        console.log("animation is finished");
      }
    );

    document.getElementById("t-play").addEventListener("click", (event) => {
      effect.start();
    });
    document.getElementById("t-stop").addEventListener("click", (event) => {
      effect.stop();
    });
  }
};

const textEffect = (element) => {
  const chars =
    "░▒▓▀█▄■abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéèàçù.',!?#$%&*-+/Ø@";
  const container = document.querySelector(element);
  const target = document.querySelector(`${element} .text`);
  const targetContent = target.textContent.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

  const transform = (sentence, flag) => {
    const newSentence = sentence.split("").map((letter, i) => {
      if (letter == " ") {
        return " ";
      } else if (flag && targetContent[i] == letter) {
        return targetContent[i];
      } else {
        return chars[Math.floor(Math.random() * chars.length)];
      }
    });
    return newSentence.join("");
  };

  let newTargetContent = transform(targetContent, false);
  let anim = null;

  const interval = () => {
    container.classList.add("animating");
    anim = setInterval(() => {
      newTargetContent = transform(newTargetContent, true);
      if (newTargetContent !== targetContent) {
        target.innerHTML = newTargetContent;
      } else {
        clearInterval(anim);
        container.classList.remove("animating");
        target.innerHTML = targetContent;
        anim = null;
      }
    }, 15);
  };

  target.addEventListener("mouseenter", () => {
    console.log("mouseenter");
    if (anim == null) {
      newTargetContent = transform(targetContent, false);
      interval();
    }
  });

  const init = () => {
    target.style.width = `${target.offsetWidth}px`;
    target.style.height = `${target.offsetHeight}px`;
    newTargetContent = transform(targetContent, false);
    interval();
  };

  init();

  /* Resize */
  let resizeTimeOut = null;
  const reportResize = () => {
    target.style.width = `auto`;
    target.style.height = `auto`;
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(function () {
      init();
    }, 500);
  };
  window.addEventListener("resize", reportResize);
};

export default textEffect;

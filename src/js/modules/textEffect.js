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

export default textEffect;

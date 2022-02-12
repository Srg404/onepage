const txtEffect = (element) => {
  const chars =
    "░▒▓▀█▄■abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéèàùç.,'!?#$%&*-+/Ø@";
  const container = document.querySelector(element);
  const txt = document.querySelector(`${element} .text`);
  const txtContent = txt.textContent.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
  const author = document.querySelector(`${element} .author`);
  const authorContent = author.textContent.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

  const transform = (sentence, source) => {
    const newSentence = sentence.split("").map((letter, i) => {
      if (letter == " ") {
        return " ";
      } else if (sentence != source && source[i] == letter) {
        return source[i];
      } else {
        return chars[Math.floor(Math.random() * chars.length)];
      }
    });
    return newSentence.join("");
  };

  let newTxtContent = transform(txtContent, txtContent);
  let anim = null;

  const interval = () => {
    //container.classList.add("animating");
    clearInterval(anim);
    anim = setInterval(() => {
      newTxtContent = transform(newTxtContent, txtContent);
      if (newTxtContent !== txtContent) {
        txt.innerHTML = newTxtContent;
      } else {
        clearInterval(anim);
        //container.classList.remove("animating");
        txt.innerHTML = txtContent;
        anim = null;
      }
    }, 5);
  };

  let newAuthorContent = transform(authorContent, authorContent);
  let animAuthor = null;

  const intervalAuthor = () => {
    clearInterval(animAuthor);
    animAuthor = setInterval(() => {
      newAuthorContent = transform(newAuthorContent, authorContent);
      if (newAuthorContent !== authorContent) {
        author.innerHTML = newAuthorContent;
      } else {
        clearInterval(animAuthor);
        author.innerHTML = authorContent;
        animAuthor = null;
      }
    }, 5);
  };

  txt.addEventListener("mouseenter", () => {
    console.log("mouseenter");
    if (anim == null) {
      newTxtContent = transform(txtContent, txtContent);
      interval();
      newAuthorContent = transform(authorContent, authorContent);
      intervalAuthor();
    }
  });

  const init = () => {
    txt.style.width = `${txt.offsetWidth}px`;
    txt.style.height = `${txt.offsetHeight}px`;
    newTxtContent = transform(txtContent, txtContent);
    interval();
    newAuthorContent = transform(authorContent, authorContent);
    clearInterval(animAuthor);
  };

  init();

  /* Resize */
  let resizeTimeOut = null;
  const reportResize = () => {
    txt.style.width = `auto`;
    txt.style.height = `auto`;
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(function () {
      txt.style.width = `${txt.offsetWidth}px`;
      txt.style.height = `${txt.offsetHeight}px`;
    }, 500);
  };
  window.addEventListener("resize", reportResize);
};

export default txtEffect;

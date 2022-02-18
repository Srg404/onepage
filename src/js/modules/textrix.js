"use strict";

// This function return a string with random values of characters list
const transform = (sentence, original, charList) => {
  const newSentence = sentence.split("").map((letter, i) => {
    if (letter == " ") {
      return " ";
    } else if (sentence != original && original[i] == letter) {
      return original[i];
    } else {
      return charList[Math.floor(Math.random() * charList.length)];
    }
  });
  return newSentence.join("");
};

// This function return a string with the unique characters
const unique = (sentence) => {
  if (typeof sentence === "string" && sentence.length > 0) {
    let friends = sentence.split("");
    let unique = friends.filter((e, i) => friends.indexOf(e) === i);
    return unique.join("");
  }
  return null;
};

const defaults = {
  autoStart: true,
  extraChar: "",
  maxDuration: null,
  charList: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

export default class textrix {
  constructor(element, options, callback) {
    this.version = "0.0.1";

    this.element = document.querySelector(element);
    this.options = { ...defaults, ...options };
    this.callback = callback;

    this.animation = null; // for setInterval
    this.txt = this.element.textContent.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    this.words = []; // for the sentence cutting by word

    this.charList = unique(
      this.options.charList + this.txt + this.options.extraChar
    )
      .split(" ")
      .join("");

    this.init();
  }

  init() {
    // remove element content
    this.element.innerHTML = "";

    // wrap each words with a <span />
    this.txt.split(" ").forEach((element, i, array) => {
      let wrapper = document.createElement("span");
      wrapper.classList.add("textrix-word");
      // no empty space for the last word
      wrapper.innerHTML = i != array.length - 1 ? element + " " : element;
      this.words.push(wrapper.textContent);
      this.element.appendChild(wrapper).style.cssText =
        "display: inline-block; white-space: pre;";
    });

    // wrap each letters with a <span />
    this.element.querySelectorAll("span").forEach((element, i) => {
      let word = element.textContent;
      // remove <span>word</span> content
      element.innerHTML = "";
      word.split("").forEach((letter) => {
        let wrapper = document.createElement("span");
        wrapper.innerHTML = letter;
        element.appendChild(wrapper).style.cssText =
          "display: inline-block; white-space: pre;";
      });
      element.querySelectorAll("span").forEach((el) => {
        el.style.width = `${el.offsetWidth}px`;
      });
    });

    if (this.options.autoStart) {
      this.start();
    }
  }

  stop(noCallback) {
    clearInterval(this.animation);
    this.element.querySelectorAll(".textrix-word").forEach((word, iWord) => {
      word.querySelectorAll("span").forEach((letter, iLetter) => {
        letter.innerHTML = this.words[iWord][iLetter];
      });
    });
    // make an array with the first random sentence
    this.newWords = this.words.map((el) => {
      return [transform(el, el, this.charList), false];
    });
    if (!noCallback) {
      this.callback();
    }
  }

  start() {
    this.stop(true);

    this.animation = setInterval(() => {
      if (this.newWords.filter((x) => x[1]).length != this.newWords.length) {
        this.newWords = this.newWords.map((el, i) => {
          if (!el[1]) {
            let newEl = transform(el[0], this.words[i], this.charList);
            let equal = newEl == this.words[i] ? true : false;
            return [newEl, equal];
          } else {
            return el;
          }
        });
        this.element
          .querySelectorAll(".textrix-word")
          .forEach((word, iWord) => {
            word.querySelectorAll("span").forEach((letter, iLetter) => {
              letter.innerHTML = this.newWords[iWord][0][iLetter];
            });
          });
      } else {
        this.stop();
      }
    }, 5);
  }

  destroy() {
    clearInterval(this.animation);
    this.element = null;
    this.options = { ...options, ...defaults };
    this.element.innerHTML = this.txt;
  }
}

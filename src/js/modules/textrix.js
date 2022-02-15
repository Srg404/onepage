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
  charList: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéèàùç",
};

export default class textrix {
  constructor(element, options) {
    this.version = "0.0.1";

    this.element = document.querySelector(element);
    this.options = { ...defaults, ...options };

    this.animation = null; // for setInterval
    this.txt = this.element.textContent.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

    this.charList = unique(
      this.options.charList + this.txt + this.options.extraChar
    )
      .split(" ")
      .join("");

    this.newTxt = this.txt;

    this.init();
  }

  init() {
    console.log("init");

    this.newTxt = transform(this.newTxt, this.txt, this.charList);

    this.element.style.cssText = "";

    // wrap each letters and add style width //
    this.element.innerHTML = "";
    this.txt.split("").forEach((element) => {
      let wrapper = document.createElement("span");
      wrapper.innerHTML = element;

      if (element !== " ") {
        this.element.appendChild(wrapper).style.cssText =
          "display: inline-block;";
      } else {
        this.element.appendChild(wrapper).style.cssText =
          "display: inline-block; white-space: pre;";
      }
    });

    this.element.querySelectorAll("span").forEach((element) => {
      //console.log(element.textContent, element.offsetWidth);
      element.style.width = `${element.offsetWidth}px`;
    });

    if (this.options.autoStart) {
      this.start();
    }
  }

  start() {
    console.log("Start");

    clearInterval(this.animation);

    this.animation = setInterval(() => {
      this.newTxt = transform(this.newTxt, this.txt, this.charList);
      if (this.newTxt != this.txt) {
        // this.element.innerHTML = this.newTxt;
        //*/
        this.element.querySelectorAll("span").forEach((element, index) => {
          element.innerHTML = this.newTxt[index];
        });
        //*/
      } else {
        clearInterval(this.animation);
        // this.element.innerHTML = this.txt;
        //*/
        this.element.querySelectorAll("span").forEach((element, index) => {
          element.innerHTML = this.txt[index];
        });
        //*/
        this.animation = null;
      }
    }, 5);
  }

  stop() {
    console.log("Stop");
    clearInterval(this.animation);
    // this.element.innerHTML = this.txt;
    //*/
    this.element.querySelectorAll("span").forEach((element, index) => {
      element.innerHTML = this.txt[index];
    });
    //*/
  }

  destroy() {
    console.log("Destroy");

    this.element = null;
    this.options = { ...options, ...defaults };
    this.element.innerHTML = this.txt;
  }
}

import { spacing, textSpcing, utilities } from "./space.js";

const allElement = document.querySelectorAll("[class]");

allElement.forEach((e) => {
  e.classList.forEach((elem) => {
    if (elem.startsWith(`chai-`)) {
      if (elem.startsWith(`chai-text-`)) {
        const spl = elem.split("-");
        e.style.color = spl[2];
      }
      if (elem.startsWith(`chai-bg-`)) {
        const spl = elem.split("-");
        e.style.backgroundColor = spl[2];
      }
      if (elem.startsWith(`chai-size-`)) {
        const spl = elem.split("-");
        const testVal = spl[2];
        console.log(testVal);
        // let temp = null
        if (textSpcing[testVal] !== undefined) {
          const temp = textSpcing[testVal];
          console.log(temp);
          e.style.fontSize = temp;
        }
      }
      if (elem.startsWith("chai-border")) {
        e.style.border = "1px solid #000";
      }
      if (elem.startsWith(`chai-rounded-`)) {
        const spl = elem.split("-");
        const take = spl[2];
        if (textSpcing[take] !== undefined);
        const temp = textSpcing[take];
        e.style.borderRadius = temp;
      }
      if (elem.startsWith(`chai-flex`)) {
        e.style.display = "flex";
      }
      if (elem.startsWith(`chai-hidden`)) {
        e.style.display = "none";
      }
      if (elem.startsWith(`chai-justify-around`)) {
        e.style.justifyContent = "space-around";
      }
      if (elem.startsWith(`chai-justify-self`)) {
        e.style.justifySelf = "center";
      }
      if (elem.startsWith(`chai-decoration-none`)) {
        e.style.textDecoration = "none";
      }
      if (elem.startsWith(`chai-justify-between`)) {
        e.style.justifyContent = "space-between";
      }
      if (elem.startsWith(`chai-justify-center`)) {
        e.style.justifyContent = "center";
      }
      if (elem.startsWith(`chai-items-center`)) {
        e.style.alignItems = "center";
      }
      if (elem.startsWith(`chai-text-center`)) {
        e.style.textAlign = "center";
      }
      if (elem.startsWith(`chai-cursor-pointer`)) {
        e.style.cursor = "pointer";
      }
      if (elem.startsWith(`chai-relative`)) {
        e.style.position = "relative";
      }
      if (elem.startsWith(`chai-absolute`)) {
        e.style.position = "absolute";
      }
      if (elem.startsWith(`chai-fixed`)) {
        e.style.position = "fixed";
      }

      const parts = elem.split("-");
      const key = parts[1];
      const val = parts[2];

      const cssProp = utilities[key]; // Get Key Value
      let cssValue = val; // Store value
      if (spacing[val] !== undefined) {
        // if not undefined
        cssValue = spacing[val];
        //   console.log("Ab Kya Aya ?", cssValue)
      }

      e.style[cssProp] = cssValue;
    }
  });
});

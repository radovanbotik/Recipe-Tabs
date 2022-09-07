import { meals } from "../data/mealsData.js";
console.log(meals);

const getElement = selector => {
  if (document.querySelector(selector)) return document.querySelector(selector);
  else throw new Error("Selector does not exist. Check it again!");
};

const getElementAll = selector => {
  if (document.querySelectorAll(selector))
    return document.querySelectorAll(selector);
  else throw new Error("Selector does not exist. Check it again!");
};

export { getElement, getElementAll };

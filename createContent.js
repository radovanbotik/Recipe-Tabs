import { getElement, getElementAll } from "./utility/getElement.js";
import { meals } from "./data/mealsData.js";

const tabsContentSection = getElement(".tabs-content-section");
const tabsImages = getElement(".tabs-images");
const tabsHeader = getElement(".tabs-header");
const tabsFooter = getElement(".tabs-footer");
const tabsButtons = [...getElementAll(".btn")];
const tabsDatas = [...getElementAll(".tabs-data")];
console.log(meals);
const createButtons = () => {
  const btns = meals
    .map(meal => {
      const { id, image, ingredients, name } = meal;
      return `
        <button class="btn active" data-id="${id}">${name}</button>
        `;
    })
    .join("");
  tabsHeader.innerHTML = btns;
};
const createContent = () => {
  meals.map(meal => {
    const { id, image, ingredients, name } = meal;
    return `
    
    `;
  });
};
createButtons();
createContent();
export { createContent };

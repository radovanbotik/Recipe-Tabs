import { getElement, getElementAll } from "./utility/getElement.js";
import { meals } from "./data/mealsData.js";

const tabsContentSection = getElement(".tabs-content-section");
const tabsImages = getElement(".tabs-images");
const tabsHeader = getElement(".tabs-header");
const tabsFooter = getElement(".tabs-footer");
const tabsButtons = [...getElementAll(".btn")];
const tabsDatas = [...getElementAll(".tabs-data")];

const createButtons = () => {
  const btns = meals
    .map(meal => {
      const { id, name } = meal;
      return `
        <button class="btn" data-id="${id}">${name}</button>
        `;
    })
    .join("");
  return (tabsHeader.innerHTML = btns);
};

const createData = () => {
  const data = meals
    .map(meal => {
      const { id, ingredients, name, instructions } = meal;
      const ingredientsListItems = ingredients
        .map((ing, index) => {
          const { name, weight } = ing;
          return `
        <li class='listItem'><span>Ingredient${
          index + 1
        } : ${name}</span><span> weight: ${weight}</span</li>
        `;
        })
        .join("");
      return `
        <article class="tabs-data" id="${id}">
        <h4>${name}</h4>
        <p>
          ${instructions}
        </p>
        <ul>
         ${ingredientsListItems}
        </ul>
      </article>
        `;
    })
    .join("");
  return (tabsFooter.innerHTML = data);
};
tabsContentSection.innerHTML = `${createButtons()}${createData()}`;
// createButtons();
// createData();
export { createButtons, createData, tabsContentSection };

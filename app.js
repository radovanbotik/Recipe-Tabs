import { getElement, getElementAll } from "./utility/getElement.js";

const tabsContentSection = getElement(".tabs-content-section");

const tabsButtons = [...getElementAll(".btn")];
const tabsDatas = [...getElementAll(".tabs-data")];

tabsContentSection.addEventListener("click", e => {
  const element = e.target.dataset.id;
  console.log(element);
});

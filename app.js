import { getElement, getElementAll } from "./utility/getElement.js";
import { createContent } from "./createContent.js";

const tabsContentSection = getElement(".tabs-content-section");
const tabsButtons = [...getElementAll(".btn")];
const tabsDatas = [...getElementAll(".tabs-data")];

tabsContentSection.addEventListener("click", e => {
  const element = e.target.dataset.id;

  if (element) {
    tabsButtons.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    tabsDatas.forEach(data => {
      data.classList.remove("active");
    });
    const matchingData = getElement(`#${element}`);
    matchingData.classList.add("active");
  }
});

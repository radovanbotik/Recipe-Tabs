import { getElement, getElementAll } from "./utility/getElement.js";
//I am changing HTML in createContent so I have to import the new value
import { tabsContentSection } from "./createContent.js";

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

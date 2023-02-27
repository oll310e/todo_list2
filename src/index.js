import DOM from "./DOM";
import mainContent from "./displayMain";
import clearMain from "./clearMain";
import "./styles/style.css";

mainContent.displayHome();

const menu = DOM.getMenu();

const homeBtn = menu.querySelector("#home");
const todayBtn = menu.querySelector("#today");
const weekBtn = menu.querySelector("#week");

homeBtn.addEventListener("click", (e) => {
  clearMain();
  mainContent.displayHome();
});

todayBtn.addEventListener("click", (e) => {
  clearMain();
  mainContent.displayToday();
});

weekBtn.addEventListener("click", (e) => {
  clearMain();
  mainContent.displayWeek();
});

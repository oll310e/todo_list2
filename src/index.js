import DOM from "./DOM";
import mainContent from "./displayMain";
import clearMain from "./clearMain";
import taskStorage from "./taskStorage";
import "./styles/style.css";

mainContent.displayHome();

const menu = DOM.getMenu();
const main = DOM.getMain();

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

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    taskStorage.removeTask(
      e.target.parentNode.querySelector(".name").innerText
    );
    clearMain();
    mainContent.displayHome();
  }
});

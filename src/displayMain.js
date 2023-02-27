import DOM from "./DOM";
import taskStorage from "./taskStorage";

const mainContent = {
  main: DOM.getMain(),
  mainTitle: DOM.getMain().querySelector(".mainTitle"),

  displayHome() {
    this.mainTitle.innerText = "Home";

    taskStorage.displayTasks();
    // this.main.appendChild(homeTitle);
  },
  displayToday() {
    this.mainTitle.innerText = "Today";

    // this.main.appendChild(homeTitle);
  },
  displayWeek() {
    this.mainTitle.innerText = "Week";

    // this.main.appendChild(homeTitle);
  },
};

export default mainContent;

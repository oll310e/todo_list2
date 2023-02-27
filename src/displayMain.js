import DOM from "./DOM";

const mainContent = {
  main: DOM.getMain(),
  mainTitle: DOM.getMain().querySelector(".mainTitle"),

  displayHome() {
    this.mainTitle.innerText = "Home";

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

import DOM from "./DOM";

export default function clearMain() {
  DOM.getMain().querySelector(".taskList").innerHTML = "";
}

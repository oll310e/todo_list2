import DOM from "./DOM";

export default function displayAddTask() {
  //   let addTaskForm = doucment.createElement("form");
  //   addTaskForm.classList.add("addTaskForm");

  //   let taskFormInputName = document.createElement("input");

  //   let taskFormAddBtn = document.createElement("button");
  //   taskFormAddBtn.setAttribute("type", "button");

  //   let taskFormCancelBtn = document.createElement("button");
  //   taskFormCancelBtn.setAttribute("type", "button");

  //   addTaskForm.appendChild(taskFormInputName);
  //   addTaskForm.appendChild(taskFormAddBtn);
  //   addTaskForm.appendChild(taskFormCancelBtn);

  //   DOM.getMain().querySelector(".taskList").appendChild(addTaskForm);

  let p = document.createElement("form");
  p.id = "addTaskForm";

  let name = document.createElement("input");
  name.classList.add("taskName");

  let add = document.createElement("button");
  add.classList.add("addTaskBtn");
  add.innerText = "Add Todo";

  let cancel = document.createElement("button");
  cancel.classList.add("cancelTaskBtn");
  cancel.innerText = "Cancel";

  p.appendChild(name);
  p.appendChild(add);
  p.appendChild(cancel);

  DOM.getMain().querySelector(".taskList").appendChild(p);
}

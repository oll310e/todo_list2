import DOM from "./DOM";

const taskStorage = {
  tasks: [
    { name: "hello", date: "jan" },
    { name: "World", date: "date" },
  ],

  createTask(name, date) {
    return {
      name,
      date,
    };
  },

  addTask(task) {
    this.tasks.push(task);
  },

  displayTasks() {
    this.tasks.forEach((task) => {
      let newTask = document.createElement("div");
      newTask.classList.add("task");

      let newTaskName = document.createElement("p");
      newTaskName.innerText = `${task.name}`;

      let newTaskDeleteBtn = document.createElement("button");
      newTaskDeleteBtn.innerText = "X";
      newTaskDeleteBtn.classList.add("deleteBtn");

      let newTaskDate = document.createElement("p");
      newTaskDate.innerText = `${task.date}`;

      newTask.appendChild(newTaskDeleteBtn);
      newTask.appendChild(newTaskName);
      newTask.appendChild(newTaskDate);

      DOM.getMain().appendChild(newTask);
    });
  },

  removeTask(taskToRemove) {
    this.tasks.forEach((task, i) => {
      if (task.name == taskToRemove.name) {
        this.tasks.splice(i, 1);
      }
    });
  },
};

export default taskStorage;

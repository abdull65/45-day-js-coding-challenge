/*
TASK PRIORITY MANAGER
*/
// Initialize an empty array called taskList to
// store tasks. Each task should be an object with
// properties like name (task name) and priority
// (task priority).
let taskList = [];
const addTaskBtn = document.getElementById("addTask");
const delTaskBtn = document.getElementById("delTask");
const editPriorityBtn = document.getElementById("editPriority");
const taskNameInput = document.querySelector("#taskName");
const taskPriorityInput = document.querySelector("#taskPriority");
const taskTable = document.querySelector("#tableBody");
const responseBoxEl = document.querySelector(".responseBox");
responseBoxEl.style.display = "none";
const responseFunc = function (message) {
  responseBoxEl.textContent = message;
  setTimeout(() => {
    responseBoxEl.style.display = "none";
  }, 2000);
  responseBoxEl.style.display = "flex";
};
const renderTasks = () => {
  // Clear the task list
  taskTable.innerHTML = "";
  taskList.forEach((task) => {
    const taskRow = document.createElement("tr");
    const taskNameBox = document.createElement("td");
    const taskPriorityBox = document.createElement("td");
    taskNameBox.textContent = task.name;
    taskPriorityBox.textContent = task.priority;
    taskRow.append(taskNameBox);
    taskRow.append(taskPriorityBox);
    taskTable.appendChild(taskRow);
  });
};
// efunction to add new task
const addTask = function (name, priority) {
  if (!name || isNaN(priority)) {
    responseFunc("Please enter a valid task name and priority.");
    return;
  }
  const doesTaskNameExist = taskList.some((task) => task.name === name);
  const doesTaskPriorityExist = taskList.some(
    (task) => task.priority === priority
  );
  if (doesTaskNameExist && doesTaskPriorityExist) {
    responseFunc(`Task "${name}" already exists.`);
    return;
  }
  let newTask = {
    name: name,
    priority: priority,
  };

  let added = false;
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].priority <= priority) {
      taskList.splice(i, 0, newTask);
      added = true;
      break;
    }
  }
  if (!added) {
    taskList.push(newTask);
  }

  responseFunc(`Task "${name}" with priority ${priority} has been added.`);
  renderTasks();
};

const removeTask = function (name) {
  let findIndex = taskList.findIndex((task) => task.name === name);
  if (findIndex !== -1) {
    taskList.splice(findIndex, 1);
    responseFunc(`Task "${name}" has been removed.`);
    renderTasks();
  } else {
    responseFunc(`Task "${name}" not found.`);
  }
};

const changePriority = function (name, newPriority) {
  let findIndex = taskList.findIndex((task) => task.name === name);
  if (findIndex !== -1) {
    taskList.splice(findIndex, 1);

    const updateTask = {
      name: name,
      priority: newPriority,
    };

    let added = false;
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].priority <= newPriority) {
        taskList.splice(i, 0, updateTask);
        added = true;
        break;
      }
    }
    if (!added) {
      taskList.push(updateTask);
    }
    responseFunc(
      `Priority of task "${name}" has been updated to ${newPriority}.`
    );
    renderTasks();
  } else {
    responseFunc(`Task "${name}" not found. Cannot change priority.`);
  }
};

addTaskBtn.addEventListener("click", () => {
  const taskName = taskNameInput.value.trim();
  const taskPriority = taskPriorityInput.value.trim();
  const parsePriority = parseInt(taskPriority);
  addTask(taskName, parsePriority);
  taskNameInput.value = "";
  taskPriorityInput.value = "";
});

delTaskBtn.addEventListener("click", () => {
  const taskToRemove = taskNameInput.value.trim();
  removeTask(taskToRemove);
  taskNameInput.value = "";
  taskPriorityInput.value = "";
});

editPriorityBtn.addEventListener("click", () => {
  const taskToEdit = taskNameInput.value.trim();
  const newPriority = taskPriorityInput.value.trim();
  const parsePriority = parseInt(newPriority);
  changePriority(taskToEdit, parsePriority);
  taskNameInput.value = "";
  taskPriorityInput.value = "";
});

//////////////////////////////////////////////////
const openManualBtnEl = document.querySelector("#openMenu");
const closeManualBtnEl = document.querySelector("#closeMenu");
const manualContentEl = document.querySelector(".stepsBox");
openManualBtnEl.addEventListener("click", () => {
  manualContentEl.classList.toggle("openManual");
  openManualBtnEl.classList.toggle("openManual");
});
closeManualBtnEl.addEventListener("click", () => {
  manualContentEl.classList.toggle("openManual");
  openManualBtnEl.classList.toggle("openManual");
});

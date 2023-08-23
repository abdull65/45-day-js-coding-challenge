/*
// TO-DO LIST PROJECT USING SLICE AND SPLICE METHODS
//1. initialize an empty array called todoList
let toldoList = [];

//2. define a function calleld addItem with parameter item
const addItem = function (item) {
  // use splice method to add the item to the end of the todoList array
  let addItemToList = toldoList.splice(toldoList.length, 0, item);
  // display a message indicating that the item is added
};
addItem("hello world");
addItem("welcome");
addItem("welcome1");
addItem("welcome2");
addItem("welcome3");
console.log(toldoList);

// 3.. define a function named removeItem with a parameter (index)
const removeItem = function (index) {
  // check if the index is within the valid range of indices in todoList array
  if (index >= 0 && index < toldoList.length) {
    // Use splice to remove the item at the specified index
    let removedItem = toldoList.splice(index, 1);
    // display message indicating the item has been removed
    console.log(removedItem);
    // if thne index is not valid:
  } else {
    // display an error message indicating that the index is invalid and the item was not removed
    console.log("index is invalid and the item was not removed");
  }
};
removeItem(1);

//4.define a function diplayList
const displayList = function () {
  // display a header message display TO-DO LIST
  const header = "TO-DO LIST";
  // loop through each item in the todoList array
  for (let i = 0; i < toldoList.length; i++) {
    // display the item along with its corresponding index starting from 1
    console.log(`${i + 1}. ${toldoList[i]}`);
    // 5. display the current to-do list using the display list
  }
};
displayList();
removeItem(2);
displayList();

// 6. add some initial item to the todo-list using addItem function

// 7. remove an item from the to-do list using the removeItem function specifying the index of the item to be removed

// 8 display the updated to-do list using the display list function

*/

/*
TASK PRIORITY MANAGER
*/
// Initialize an empty array called taskList to
// store tasks. Each task should be an object with
// properties like name (task name) and priority
// (task priority).
let taskList = [];

// Define a function addTask(name, priority)
const addTask = function (name, priority) {
  // Create a new task object with the
  // provided name and priority.
  let newTask = {
    name: name,
    priority: priority,
  };
  // Use the splice() method to add the task object to the taskList array
  // at the appropriate position based on its priority.
  let added = false;
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].priority >= priority) {
      taskList.splice(i, 0, newTask);
      added = true;
      break;
    }
  }
  // If multiple tasks have the same priority, they
  // can be sorted by the order in which they were added.
  if (!added) {
    taskList.push(newTask);
  }
  // Display a message indicating that the task has been added.
  console.log(taskList);
};
addTask("push project", 4);

const removeTask = function (name) {
  let findIndex = taskList.findIndex((task) => task.name === name);
  if (findIndex !== -1) {
    taskList.splice(findIndex, 1);
    console.log(`task ${name} has been removed`);
  } else {
    console.log(`task ${name} not found`);
  }
};
const displayTask = function () {
  console.log("TASK LIST");
  taskList.forEach((task) => {
    console.log(`${task.name} priority: ${task.priority}`);
  });
};
displayTask();
const changePriority = function (name, newPriority) {
  // Use the findIndex() method to locate the index of the task
  //  with the specified name in the taskList array.
  let findIndex = taskList.findIndex((task) => task.name === name);
  if (findIndex !== -1) {
    taskList.splice(findIndex, 1);

    // Create a new task object with the same name and the new priority.
    const updateTask = {
      name: name,
      priority: newPriority,
    };
    // Use the splice() method to add the new task
    // object at the appropriate position based on its
    // new priority.
    let added = false;
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].priority >= newPriority) {
        taskList.splice(i, 0, updateTask);
        added = true;
        break;
      }
    }
    if (!added) {
      taskList.push(updateTask);
    }
    console.log(`Priority of task 
    "${name}" has been updated to ${newPriority}.`);
  } else {
    console.log(`Task "${name}" not found. Cannot change priority.`);
  }
};
// Implement a menu system that allows users to interact with the Task Manager:
const menu = function () {
  while (true) {
    console.log("\nTask Manager Menu:");
    console.log("1. Add Task");
    console.log("2. Remove Task");
    console.log("3. Change Priority");
    console.log("4. Display Tasks");
    console.log("5. Exit");

    const choice = parseInt(prompt("Enter your choice (1-5):"));
    switch (choice) {
      case 1:
        const taskName = prompt("Enter Task name:");
        const taskPriority = prompt("Enter Task priority:");
        const convertInt = parseInt(taskPriority);
        addTask(taskName, convertInt);
        break;
      case 2:
        const taskToRemove = prompt("Enter the name of the task to remove");
        removeTask(taskToRemove);
        break;
      case 3:
        const taskToChange = prompt(
          "Enter the name of the task to change priority:"
        );
        const newPriority = prompt("Enter new task:");
        const convertNewInt = parseInt(newPriority);
        changePriority(taskToChange, convertNewInt);
        break;
      case 4:
        displayTask();
        break;
      case 5:
        console.log("exiting manager...");
        return;
      default:
        console.log("Invalid choice. Please select a valid option (1-5).");
        break;
    }
  }
};
menu();

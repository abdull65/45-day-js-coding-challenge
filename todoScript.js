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

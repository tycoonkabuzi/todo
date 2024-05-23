// we are now starting the project.
//
const inputTab = document.getElementById("theTask");
const addTask = document.getElementById("add");
const displayField = document.querySelector(
  ".container__textInput__content__output"
);

let tasks = [];

function getTheInput(inputValue) {
  const text = inputValue.value.trim();
  return text;
}

// to get the input
// function store to an array
function saveToArray(theArray) {
  const theInput = getTheInput(inputTab);
  theArray.push(theInput);
  //console.log(tasks);
  inputTab.value = "";
  return theArray;
}

//we create a function to get the input from the textfield

// initialising an array to store our tasks

//saving function
function saveToLocalstorage() {
  let savedTasks = saveToArray(tasks);
  for (let i = 0; i < savedTasks.length; i++) {
    localStorage.setItem(i, tasks[i]);
  }
}
// creating elements and appending them
function creatAndAppend() {
  displayField.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const newRadio = document.createElement("input");
    const newElement = document.createElement("div");
    newElement.classList.add("container__textInput__content__output__element");
    let theText = document.createElement("p");

    const deleteIconClass = document.createElement("div");
    deleteIconClass.classList.add(
      "container__textInput__content__output__element__img"
    );
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "/assets/delete.png";
    newRadio.type = "radio";
    displayField.appendChild(newElement);
    newElement.appendChild(newRadio);
    newElement.appendChild(theText);
    newElement.appendChild(deleteIconClass);
    deleteIconClass.appendChild(deleteIcon);
    theText.innerText = localStorage.getItem(localStorage.key(i));
  }
}
// function to display the content

function displayTask() {
  saveToLocalstorage();
  console.log(localStorage);
  creatAndAppend();
  // displaying the tasks from the array [Tasks]

  //deleteButton.addEventListener("click", () => deleteElement(tasks, e));
}
// displaying elment

function deleteElement(task, e) {
  const theTarget = e.target();
  task.splice(1, 0);
  console.log(theTarget);
}

addTask.addEventListener("click", () => displayTask());
document.addEventListener("DOMContentLoaded", () => {
  creatAndAppend();
  console.log(localStorage);
});

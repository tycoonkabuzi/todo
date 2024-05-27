// we are now starting the project.
//
const inputTab = document.getElementById("theTask");
const addTask = document.getElementById("add");
const displayField = document.querySelector(
  ".container__textInput__content__output"
);
const outputElement = document.querySelector(
  ".container__textInput__content__output__element"
);
// creating an array to store all the data coming from our inputField
let tasks = [];
// here we get the value from the imput  and return it in a form of text
function getTheInput(inputValue) {
  const text = inputValue.value.trim();
  return text;
}

// the value gotten and returned into a text sent to the the array created and return the array
function saveToArray(theArray) {
  const theInput = getTheInput(inputTab);
  theArray.push(theInput);
  //console.log(tasks);
  inputTab.value = "";
  return theArray;
}

//we create a function to save the value from the input into the array in an automatic way.  and update the local storage.
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
    newElement.classList.add(`container__textInput__content__output__element`);
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
    // button to delete the element
    deleteIcon.addEventListener("click", () => deleteElement(i));
  }
}
// function to display the content. here we call all the functions. which means save to local storage the data, and append the element.

function displayTask() {
  saveToLocalstorage();
  creatAndAppend();
  // displaying the tasks from the array [Tasks]

  //deleteButton.addEventListener("click", () => deleteElement(tasks, e));
}
// displaying elment

function deleteElement(selected) {
  localStorage.removeItem(selected);
  location.reload();
  console.log(`element ${selected}`);
}
// create an event listener and use the displayTask function to be triggered
addTask.addEventListener("click", () => displayTask());

// call the creatAndAppend function whenever we reload the
document.addEventListener("DOMContentLoaded", () => {
  creatAndAppend();
  console.log(localStorage);
});

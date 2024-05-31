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

let tasks = fromLocalStorageToArray() || [];

// tranform from localStorage to Array
function fromLocalStorageToArray() {
  let newArray = [];

  for (let i = 0; i < localStorage.length; i++) {
    newArray.push(localStorage.getItem(i));
  }

  console.log(newArray);

  return newArray;
}

// here we get the value from the imput  and return it in a form of text
function getTheInput(inputValue) {
  const text = inputValue.value.trim();
  return text;
}

// the value gotten and returned into a text sent to the the array created and return the array
function saveToArray() {
  const theInput = getTheInput(inputTab);
  if (theInput != "" && !tasks.includes(getTheInput(inputTab))) {
    tasks.push(theInput);
  }
  //console.log(tasks);
  inputTab.value = "";
  return tasks;
}

//we create a function to save the value from the input into the array in an automatic way.  and update the local storage.
function saveToLocalstorage() {
  let savedTasks = saveToArray();
  for (let i = 0; i < savedTasks.length; i++) {
    localStorage.setItem(i, tasks[i]);
  }
}
// creating elements and appending them
function creatAndAppend() {
  console.log(tasks);
  displayField.innerHTML = "";
  tasks.forEach((element, index) => {
    const newRadio = document.createElement("input");
    const newElement = document.createElement("div");
    newElement.classList.add(`container__textInput__content__output__element`);
    let theText = document.createElement("p");
    newRadio.name = "tasks";
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
    theText.innerText = element;
    // button to delete the element
    deleteIcon.addEventListener("click", () => deleteElement(index));
    newRadio.addEventListener("click", () => selectToEdit(index, newRadio));
  });
}

// function to display the content. here we call all the functions. which means save to local storage the data, and append the element.

function displayTask() {
  saveToLocalstorage();
  creatAndAppend();
}
function selectToEdit(selected, checked) {
  let theElement = tasks[selected];
  inputTab.value = theElement;
  addTask.innerText = "Edit";
  addTask.style.backgroundColor = "#a5d6a7";
  addTask.removeEventListener("click", displayTask);
  addTask.addEventListener("click", () => editData(selected, checked));
}
function editData(selected, button) {
  tasks.splice(selected, 1, inputTab.value);
  alert("It is modified as requested to " + selected + inputTab.value);
  button.checked = false;
  console.log(tasks);
  displayTask();

  return tasks;
}

// deleting elements from the array
function deleteElement(selected) {
  tasks.splice(selected, 1);
  localStorage.clear();
  //location.reload();
  saveToLocalstorage();
  //console.log(tasks);
  creatAndAppend();
}
// create an event listener and use the displayTask function to be triggered
addTask.addEventListener("click", displayTask);

// call the creatAndAppend function whenever we reload the
document.addEventListener("DOMContentLoaded", () => {
  //localStorage.clear();
  creatAndAppend();
  console.log(localStorage);
});

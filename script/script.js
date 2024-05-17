// we are now starting the project.
//
const inputTab = document.getElementById("theTask");
const addTask = document.getElementById("add");
//we create a function to get the input from the textfield
function getTheInput(theText) {
  const text = theText.value;
  return text;
}
// function to display the content
function displayTask(newTodo) {
  const theInput = getTheInput(newTodo);
  const displayField = document.querySelector(
    ".container__textInput__content__output"
  );
  const newElement = document.createElement("div");
  newElement.classList.add("container__textInput__content__output__element");
  const theText = document.createElement("p");
  theText.innerText = theInput;
  const newRadio = document.createElement("input");
  displayField.appendChild(newElement);
  newRadio.type = "radio";
  displayField.appendChild(newElement);
  newElement.appendChild(newRadio);
  newElement.appendChild(theText);
}
addTask.addEventListener("click", () => displayTask(inputTab));

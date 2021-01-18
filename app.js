//Selectors 
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions 
function addTodo(event) {
  //Prevent from submitting 
  event.preventDefault();
  //Creting to do div
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //LI 
  let newToDo = document.createElement("li");
  newToDo.innerText = todoInput.value;

  newToDo.classList.add("todo-item");
  todoDiv.appendChild(newToDo);

  //Create check button 
  let completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa fa-check"></i>'
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create trash button 
  let trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa fa-trash"></i>'
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv)

  //Clear todo Input value 
  todoInput.value = "";





}
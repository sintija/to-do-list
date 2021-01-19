//Selectors 
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("domLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);

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

  //Add todo to the local storage
  saveToLocalStorage(todoInput.value);

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
  todoList.appendChild(todoDiv);

  //Clear todo Input value 
  todoInput.value = "";

}

function deleteCheck(e) {
  // console.log(event.target);
  let item = e.target;
  if (item.classList[0] === 'trash-btn') {
    let todo = item.parentElement;
    //Adding the animation to the element
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });

  }

  //Check Mark
  if (item.classList[0] === 'complete-btn') {
    let todoChecked = item.parentElement;
    todoChecked.classList.toggle('completed');
  }
}

//Filter to do 
function filterToDo(event) {
  let todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }

  });

}


//Save to local storage 

function saveToLocalStorage(todo) {
  //Check if already hve the items 
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  //Check if already have the items 
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos.JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {

    //Creting to do div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //LI 
    let newToDo = document.createElement("li");
    newToDo.innerText = todo;

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
    todoList.appendChild(todoDiv);

  });

}

function removeLocalTodos(todo) {
  //Check if already have the items 
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  let todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));

}
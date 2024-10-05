const todoContainer = document.querySelector(".todo-container");
const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");

let todoArray = [];

const URL = "http://localhost:4000";

async function get_todos() {
  try {
    const res = await fetch(`${URL}/todos`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

function display_todos(todoArr) {
  todoArr.forEach((todoElem) => {
    console.log(todoElem);

    // Parent element for display todos
    let todo = document.createElement("div");
    todo.classList.add("todo");

    // Childrens for displaying todo info
    let todoInfo = document.createElement("div");
    todoInfo.classList.add("todo-info");
    let todoBtn = document.createElement("form");
    todoBtn.classList.add("todo-btn");

    // Grand children for displaying todos
    let todoCompleted = document.createElement("input");
    todoCompleted.classList.add("todo-completed");
    todoCompleted.setAttribute("type", "checkbox");
    todoCompleted.checked = todoElem.completed;
    let todoName = document.createElement("p");
    todoName.classList.add("todo-name");
    todoName.innerHTML = todoElem.name;

    // Buttons of todo element
    let todoEdit = document.createElement("button");
    todoName.classList.add("todo-edit");
    todoEdit.innerHTML = "Edit";
    todoEdit.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Open Model");
    });
    let todoDel = document.createElement("button");
    todoName.classList.add("todo-delete");
    todoEdit.innerHTML = "Delete";
    todoEdit.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Delete Model");
    });

    todoInfo.appendChild(todoCompleted);
    todoInfo.appendChild(todoName);
    todoInfo.appendChild(todoEdit);
    todoInfo.appendChild(todoDel);
  });
}

get_todos()
  .then((todoArr) => {
    todoArray = todoArr.todos;
    console.log(todoArray);
    display_todos(todoArray);
  })
  .catch((error) => console.log(error));

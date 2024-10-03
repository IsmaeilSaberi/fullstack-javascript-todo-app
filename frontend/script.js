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
  });
}

get_todos()
  .then((todoArr) => {
    todoArray = todoArr.todos;
    console.log(todoArray);
    display_todos(todoArray);
  })
  .catch((error) => console.log(error));

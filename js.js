const form = document.querySelector("#userForm");
const addInput = document.querySelector("#task");
const todoList = document.querySelector("#list");
const removeButton = document.querySelector("#list");

let todos = [];
runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  removeButton.addEventListener("click", removeTodoDisplay);
  donelist = addEventListener("click", itemDone);
}

function addTodo(event) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText == "") {
    $(document).ready(function () {
      $("#liveToast2").toast({
        delay: 1000,
      });
      $("#liveToast2").toast("show");
    });
  } else {
    adTodoDisplay(inputText);
    $(document).ready(function () {
      $("#liveToast1").toast({
        delay: 1000,
      });
      $("#liveToast1").toast("show");
    });
  }
  event.preventDefault();
}

function adTodoDisplay(input) {
  const liDOM = document.createElement("li");
  liDOM.className =
    "listitem d-flex justify-content-between align-items-center";

  const itemName = document.createElement("p");
  itemName.textContent = input;
  itemName.className = "itemname mb-0";

  const button = document.createElement("button");
  button.className = "btn btn-outline-danger";
  button.textContent = "Sil";

  const button2 = document.createElement("button");
  button2.className = "btn btn-outline-success";
  button2.textContent = "Yapıldı";

  todoList.appendChild(liDOM);
  liDOM.appendChild(itemName);
  liDOM.appendChild(button);
  liDOM.appendChild(button2);
  addInput.value = "";
}

function removeTodoDisplay(event) {
  if (event.target.className == "btn btn-outline-danger") {
    const todo = event.target.parentElement;
    todo.remove();
    $(document).ready(function () {
      $("#liveToast3").toast({
        delay: 1000,
      });
      $("#liveToast3").toast("show");
    });
  }
}

function itemDone(event) {
  if (event.target.className == "btn btn-outline-success") {
    const listItem = event.target;
    listItem.className = "btn btn-success";
  } else if (event.target.className == "btn btn-success") {
    const listItem = event.target;
    listItem.className = "btn btn-outline-success";
  }
}

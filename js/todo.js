const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TOODS_KEY = "todos"

const toDos = [ ];

function saveToDos () {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    
}
function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDos.push(newToDo);
    toDoInput.value = "";
    paintToDo(newToDo);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TOODS_KEY);
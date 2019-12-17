const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const toDay = document.querySelector(".js-today");

const TODO_LS = "toDo";

function loadToDo() {
    const toDoArr = localStorage.getItem(TODO_LS);
    if (toDoArr !== null) {
        paintToDo(toDoArr);
    }
    askToDo();
}

function paintToDo(toDoArr) {
    toDay.innerText = "TODAY";
    toDoList.innerHTML = toDoArr;
}

function askToDo() {
    toDoForm.addEventListener("submit", handleSummit);
}

function handleSummit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoList = addToToDoList(newToDo);
    paintToDo(newToDoList);
    this.reset();
}

function addToToDoList(newToDo) {
    let prevToDoList = localStorage.getItem(TODO_LS);
    if (prevToDoList === null) {
        prevToDoList = "";
    }
    const newToDoList = `${prevToDoList}<li>${newToDo}&nbsp&nbsp<input type="button" value="x"  style="background-color:transparent;  border:0px transparent solid;" onClick="removeFromToDoList.apply(this.parentNode)" /></li>`   
    localStorage.setItem(TODO_LS, newToDoList);
    return newToDoList;
}

function removeFromToDoList(){
    this.parentNode.removeChild(this);
    localStorage.setItem(TODO_LS, toDoList.innerHTML);
}

function init() {
    loadToDo();
}

init();
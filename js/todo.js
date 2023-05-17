const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteDoTo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos()
}

function editToDo(event) {
  const li = event.target.parentElement
  const span = li.firstChild
  const newTodo = prompt("Edit your todo", span.innerText)
  if (newTodo) {
    span.innerText = newTodo
    const index = toDos.findIndex((todo) => todo.id === parseInt(li.id))
    toDos[index].text = newTodo
    saveToDos()
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerText = newTodo.text
  const button = document.createElement("button")
  button.innerText = "❌"
  button.addEventListener("click", deleteDoTo)
  li.appendChild(span)
  li.append(button)
  toDoList.appendChild(li)
  span.addEventListener("click", editToDo)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ""
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}

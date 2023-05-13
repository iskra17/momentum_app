const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]



const bgDiv = document.createElement("div")
bgDiv.classList.add("background")
document.body.appendChild(bgDiv)

function changeBackground() {
  const chosenImage= images[Math.floor(Math.random() * images.length)]
  bgDiv.style.background = `url(img/${chosenImage}) no-repeat center center`
  bgDiv.style.backgroundSize = "cover"
}

changeBackground()

setInterval(changeBackground,10000)



const clock = document.querySelector("h2#clock")

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,"0")
  const minutes = String(date.getMinutes()).padStart(2,"0")
  const seconds = String(date.getSeconds()).padStart(2,"0")

  clock.innerText = `${hours}:${minutes}:${seconds}`
}

// setInterval(sayHello, 5000)

getClock()
setInterval(getClock, 1000)const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername)
}


const quotes = [
  { quote: "나는 아무것도 바라지 않는다. 나는 아무것도 두려워하지 않는다. 나는 자유다", author: "니코스 카잔차키스" },
  { quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 믿는 대로 될 것이다", author: "헨리 포드" },
  { quote: "성공의 비결은 단 한 가지, 잘못된 것을 고치는 것이다", author: "톰 웨일러" },
  { quote: "당신이 어려운 상황에 처했을 때, 그것은 당신이 더 강해질 시간이다", author: "에릭 토머스" },
  { quote: "기회를 만들어라. 불가능한 것은 없다", author: "토니 로빈스" },
  { quote: "당신이 포기하지 않는 한, 실패는 아니다", author: "짐론" },
  { quote: "불가능은 그저 아직 해보지 않은 것일 뿐이다", author: "제임스 캐머론" },
  { quote: "성공은 준비된 마음이 만나기 좋은 기회일 뿐이다", author: "셔먼 F. 알더슨" },
  { quote: "당신이 세상을 바꿀 수 있지만, 먼저 그것부터 시작해야 한다", author: "넬슨 만델라" },
  { quote: "누구든 자신이 선택한 길을 걸어가기에 충분히 강하다", author: "찰스 케터링" },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
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
const API_KEY = "6af676193a17334cd7ce00796b12fa77"

function onGeoOk(position) {
  const lat = position.coords.latitude
  const log = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`
    })
}
function onGeoError() {
  alert("Can't find you No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

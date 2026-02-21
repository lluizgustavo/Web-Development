
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

const idForDecemberDays = document.getElementById("days")

const createDaysOfTheMonth = () => {
for (index = 0; index < decemberDaysList.length; index += 1){
  const day = document.createElement("li");
  day.innerText = decemberDaysList[index]
  day.className = "day"
  if (index === 24 || index ===  25 || index === 31){
    day.classList.add("holiday")
  }
  if (index === 4 || index === 11 || index === 18 || index === 25){
    day.classList.add("friday")
  }
  idForDecemberDays.appendChild(day)
  }
}

createDaysOfTheMonth()


const changeColorOfTheHolidays = () => {
  const holidays = document.getElementsByClassName("holiday")
  for (day of holidays) {
    if (day.style.backgroundColor === "green"){
      day.style.backgroundColor = "white"
    }
    else{
      day.style.backgroundColor = "green"
    }
  }
}


const holiday = document.getElementById("btn-holiday")
holiday.addEventListener("click", changeColorOfTheHolidays)

const changeTextOfTheFridays = () => {
  const fridays = document.getElementsByClassName("friday")
  for (let day of fridays){
    if (day.innerText !== "friday"){
      day.dataset.original = day.innerText;
      day.innerText = "friday"
    }
    else{
      day.innerText = day.dataset.original
    }
}
}

const friday = document.getElementById("btn-friday")
friday.addEventListener("click", changeTextOfTheFridays)


const zoomOn = (event) => {
    event.target.style.fontSize = "30px"
}

const zoomOut = (event) => {
  event.target.style.fontSize = "20px"
}


const elements = document.getElementsByClassName("day")

for (elementOn of elements){
  elementOn.addEventListener("mouseover", zoomOn)
}
for (elementOut of elements){
  elementOut.addEventListener("mouseleave", zoomOut)
}




const collectTask = (event) => {
  const task = event.currentTarget
  if (task.classList.contains("selected")){
    task.classList.remove("selected")
  }
  else {
    task.classList.add("selected")
  }
}

const tasks = document.getElementsByClassName("task")
for (let task of tasks){
  task.addEventListener("click", collectTask)
}



const chooseDayForTask = (event) => {
  const tasksChoosed = document.querySelector(".selected");

  if (tasksChoosed === null) {
    return
  }
  const colorChoosed = tasksChoosed.style.backgroundColor 

  const day = event.target

  if (day.style.backgroundColor === colorChoosed)
    day.style.backgroundColor = ""
  else{
    day.style.backgroundColor = colorChoosed
  }
}

const takeDays = document.getElementsByClassName("day")

for (day of takeDays) {
  day.addEventListener("click", chooseDayForTask)
}

const addTask = () => {
  const input = document.getElementById("task-input")
  const li = document.createElement("li")
  li.innerText = input.value
  const taskList = document.getElementById("task-list")
  if (li.innerText.length < 1) {
    alert("Digite algo na caixa de compromissos.  ")
  }
  taskList.appendChild(li)
  input.value = ""

}

const input = document.getElementById("btn-add")
input.addEventListener("click", addTask)
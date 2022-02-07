//DOM MANIPULATION
import './style.css';
import {newTask, tasks} from "./app";

function popUpActive(){
    document.getElementById("pop-up-box-overlay").style.display = "block";
}

function popUpNotActive(){
    document.getElementById("pop-up-box-overlay").style.display = "none";
}

const title = document.getElementById("title");
const date = document.getElementById("date");
const description = document.getElementById("description");
const priority = document.getElementById("priority");
function clearPopUp(){
    title.value = "";
    date.value = "";
    description.value = "";
    priority.value = "";
}

const addTaskBtn = document.querySelector('#add-task');
addTaskBtn.addEventListener('click', popUpActive);

const popUpBoxAddBtn = document.querySelector('#pop-up-box-add');
popUpBoxAddBtn.addEventListener('click', () => {
    popUpNotActive();
    newTask(title.value, date.value, description.value, priority.value);
    clearPopUp();
})

const popUpBoxCancelBtn = document.querySelector('#pop-up-box-cancel');
popUpBoxCancelBtn.addEventListener('click', () => {
    popUpNotActive();
    clearPopUp();
});

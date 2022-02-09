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
    newTask(title.value, date.value, description.value, priority.value, Date.now());
    displayTasks();
    clearPopUp();
})

const popUpBoxCancelBtn = document.querySelector('#pop-up-box-cancel');
popUpBoxCancelBtn.addEventListener('click', () => {
    popUpNotActive();
    clearPopUp();
});

function removeChildren(parent){
    while(parent.lastChild){
        parent.removeChild(parent.lastChild);
    }
}

const content = document.getElementById('content');

function createTaskDivs(element){
    const div = document.createElement('div');
    div.setAttribute('data-index', element.id);
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between'

    const titleDiv = document.createElement('div');
    titleDiv.innerText = element.title;
    div.appendChild(titleDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.innerText = element.priority;
    div.appendChild(priorityDiv);

    const dateDiv = document.createElement('div');
    dateDiv.innerText = element.date;
    div.appendChild(dateDiv);

    const detailsBtn = document.createElement('button');
    detailsBtn.innerText = 'Details';
    detailsBtn.addEventListener('click', (e) => {
        document.getElementById('info-box-overlay').style.display = 'block';
        document.getElementById('info-box').setAttribute('data-index', e.target.parentNode.getAttribute('data-index'));
        document.getElementById('info-box-title').innerText = 'Title';
        document.getElementById('info-box-date').innerText = 'Date';
        document.getElementById('info-box-description').innerText = 'Description';
        document.getElementById('info-box-priority').innerText = 'Priority';
    });
    div.appendChild(detailsBtn);

    content.appendChild(div);
}

document.getElementById('info-box-cancel').addEventListener('click', () => {
    document.getElementById('info-box-overlay').style.display = 'none';
})

document.getElementById('info-box-remove').addEventListener('click', (e) => {
    for(let i = 0; i < tasks.length; i++){
        if(parseInt(e.target.parentNode.parentNode.getAttribute('data-index')) === tasks[i].id) tasks.splice(i, 1);
    }
    displayTasks();
    document.getElementById('info-box-overlay').style.display = 'none';
})

function displayTasks() {
    removeChildren(content);
    tasks.forEach(element => createTaskDivs(element));
}
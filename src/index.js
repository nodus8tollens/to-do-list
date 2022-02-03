import './style.css';
import {toDo} from "./app";


const title = 'title';
const description = 'description';
const dueDate = 'dueDate';
const priority = 'priority';
const notes = 'notes';
const checklist = 'checklist';

const obj = toDo(title, description, dueDate, priority, notes, checklist);

console.log(obj.talk());

////////

const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const nav = document.createElement('nav');
const div = document.createElement('div');
const footer = document.createElement('footer');


body.appendChild(header);
main.appendChild(nav);
main.appendChild(div);
body.appendChild(main);
body.appendChild(footer);
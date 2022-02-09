//APPLICATION LOGIC

/*
At a minimum to-do items should have a title, description, dueDate and priority.
You might also want to include notes or even a checklist.
 */

export function newTask(title, date, description, priority, id){
    tasks.push({title, date, description, priority, id});
    console.log(tasks)
}

export let tasks = [];
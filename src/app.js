//APPLICATION LOGIC

/*
At a minimum to-do items should have a title, description, dueDate and priority.
You might also want to include notes or even a checklist.
 */

export function toDo(title, description, dueDate, priority, notes, checklist){
    return{title, description, dueDate, priority, notes, checklist,
        talk: function () {console.log(`This item has a ${title}, ${description} and ${dueDate}`)}
    }
}

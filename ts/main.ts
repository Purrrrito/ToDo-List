window.onload = function() {
    let addTaskBtn = document.querySelector("#add-task") as HTMLButtonElement
    addTaskBtn.onclick = addTask;
}

function addTask() {
    let taskTextBox = document.querySelector('#task-input') as HTMLInputElement;

    let taskText:string = taskTextBox.value;


    let taskDiv:HTMLDivElement = document.createElement("div");

    let taskList:HTMLParagraphElement = document.createElement("p");

    taskList.textContent = taskText;

    taskDiv.appendChild(taskList);

    document.querySelector("#task-display").appendChild(taskDiv);
}
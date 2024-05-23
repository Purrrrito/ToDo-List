window.onload = function() {
    let addTaskBtn = document.querySelector("#add-task") as HTMLButtonElement
    addTaskBtn.onclick = addTask;

    
}

function addTask() {
    let taskTextBox = document.querySelector('#task-input') as HTMLInputElement;
    let taskText:string = taskTextBox.value;

    let taskDiv:HTMLDivElement = document.createElement("div");


    let taskCheckbox:HTMLInputElement = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.id = taskText;

    let taskLabel:HTMLLabelElement = document.createElement("label");
    taskLabel.htmlFor = taskText;
    taskLabel.textContent = taskText;

    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskLabel);

    document.querySelector("#task-display").appendChild(taskDiv);

    taskTextBox.value = "";
}
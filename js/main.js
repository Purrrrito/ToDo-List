window.onload = function () {
    let addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.onclick = addTask;
};
function addTask() {
    let taskTextBox = document.querySelector('#task-input');
    let taskText = taskTextBox.value;
    let taskDiv = document.createElement("div");
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.id = taskText;
    let taskLabel = document.createElement("label");
    taskLabel.htmlFor = taskText;
    taskLabel.textContent = taskText;
    taskCheckbox.addEventListener('change', function () {
        if (this.checked) {
            taskLabel.style.textDecoration = 'line-through';
        }
        else {
            taskLabel.style.textDecoration = 'none';
        }
    });
    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskLabel);
    document.querySelector("#task-display").appendChild(taskDiv);
    taskTextBox.value = "";
}

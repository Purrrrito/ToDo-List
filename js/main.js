window.onload = function () {
    let addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.onclick = createTask;
};
function createTask() {
    let taskTextBox = document.querySelector('#task-input');
    let taskText = taskTextBox.value;
    addTaskToWebpage(taskText);
    addTaskToStorage(taskText);
    taskTextBox.value = "";
}
function addTaskToWebpage(taskText) {
    let taskElement = createTaskElement(taskText);
    let tasksContainer = document.querySelector('#task-display');
    tasksContainer.appendChild(taskElement);
}
function createTaskElement(taskText) {
    let taskDiv = document.createElement("div");
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.id = taskText;
    let taskLabel = document.createElement("label");
    taskLabel.htmlFor = taskText;
    taskLabel.textContent = taskText;
    taskCheckbox.addEventListener('change', function () {
        taskLabel.style.textDecoration = this.checked ? 'line-through' : 'none';
    });
    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskLabel);
    return taskDiv;
}
function addTaskToStorage(taskText) {
    const TaskStorageKey = "Tasks";
    let taskData = localStorage.getItem(TaskStorageKey);
    let tasks = taskData ? JSON.parse(taskData) : [];
    tasks.push(taskText);
    taskData = JSON.stringify(tasks);
    localStorage.setItem(TaskStorageKey, taskData);
}

window.onload = function () {
    let addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.onclick = addTask;
};
function addTask() {
    let taskTextBox = document.querySelector('#task-input');
    let taskText = taskTextBox.value;
    let taskDiv = document.createElement("div");
    let taskList = document.createElement("p");
    taskList.textContent = taskText;
    taskDiv.appendChild(taskList);
    document.querySelector("#task-display").appendChild(taskDiv);
}

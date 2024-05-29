window.onload = function() {
    let addTaskBtn = document.querySelector("#add-task") as HTMLButtonElement
    addTaskBtn.onclick = createTask;

    displayStoredTasks();
}

function displayStoredTasks() {
    const TaskStorageKey = "Tasks";

    // Gets tasks with the StorageKey
    let storedTasks = localStorage.getItem(TaskStorageKey);

    // Checks if storedTasks is NOT null parses the JSON string to an array, otherwise initializes tasks as an empty array
    let tasks = storedTasks ? JSON.parse(storedTasks) : [];

    // Displays the tasks through a forEach loop
    tasks.forEach(taskText => {
        addTaskToWebpage(taskText);
    });
}

function createTask() {
    // Get the task input element and its value
    let taskTextBox = document.querySelector('#task-input') as HTMLInputElement;
    let taskText: string = taskTextBox.value;

    addTaskToWebpage(taskText);

    addTaskToStorage(taskText);

    // Clears text box after the task is created and added to the webpage
    taskTextBox.value = "";
}

/**
 * Adds the task to the webpage by creating a new task element and appending it to the container
 * @param taskText The text in the text box after when the btn is clicked
 */
function addTaskToWebpage(taskText:string) {
    let taskElement: HTMLDivElement = createTaskElement(taskText)

    let tasksContainer = document.querySelector('#task-display') as HTMLDivElement;

    tasksContainer.appendChild(taskElement);
}

/**
 * Creates a new task element with a checkbox and label
 * @param taskText taskText The text for the task's label
 * @returns The newly created task div element
 */
function createTaskElement(taskText:string){
    // Create a div element to hold the checkbox and label
    let taskDiv: HTMLDivElement = document.createElement("div");

    // Create a checkbox input element and set its type and id
    let taskCheckbox: HTMLInputElement = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.id = taskText;

    // Create a label for the checkbox, setting its "for" attribute and text content
    let taskLabel: HTMLLabelElement = document.createElement("label");
    taskLabel.htmlFor = taskText;
    taskLabel.textContent = taskText;

    // Create a label for the checkbox, setting its "for" attribute and text content
    taskCheckbox.addEventListener('change', function () {
        // Apply line-through style if the checkbox is checked, otherwise remove it
        taskLabel.style.textDecoration = this.checked ? 'line-through' : 'none';
    });

    // Append the checkbox and label to the task div
    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskLabel);

    // Return the complete task div
    return taskDiv;
}

function addTaskToStorage(taskText:string) {
    const TaskStorageKey = "Tasks";
    // Reads existing tasks out of storage
    let taskData = localStorage.getItem(TaskStorageKey);

    // Assigns tasks as an array of stored tasks if they exist, or defaults to an empty array if none are found
    let tasks:string[] = taskData ? JSON.parse(taskData) : [];

    tasks.push(taskText);

    // Adds to localStorage
    taskData = JSON.stringify(tasks);
    localStorage.setItem(TaskStorageKey, taskData);
}
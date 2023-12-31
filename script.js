function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
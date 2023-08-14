document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        const editButton = li.querySelector(".edit");
        editButton.addEventListener("click", editTask);

        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", deleteTask);

        taskList.appendChild(li);
        taskInput.value = "";
    }

    function editTask(event) {
        const li = event.target.parentElement;
        const span = li.querySelector("span");
        const newTaskText = prompt("Edit the task:", span.textContent);
        if (newTaskText !== null) {
            span.textContent = newTaskText;
        }
    }

    function deleteTask(event) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});


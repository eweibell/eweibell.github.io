function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.className = "task";

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `task-${Date.now()}`;
    checkbox.addEventListener("change", () => {
        label.classList.toggle("completed", checkbox.checked);
    });

    // Create a label for the checkbox
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = taskText;

    // Add a delete icon
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "trash-icon-grey.svg";
    deleteIcon.alt = "Delete";
    deleteIcon.className = "delete-icon";
    deleteIcon.onclick = () => taskList.removeChild(taskItem);

    // Append checkbox, label, and delete icon to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteIcon);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

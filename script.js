// Add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        
        // Create a new list item
        const li = document.createElement("li");
        li.innerHTML = `
            <span onclick="toggleComplete(this)">${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    }
}

// Toggle task completion
function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
}

// Delete task
function deleteTask(button) {
    button.parentElement.remove();
}

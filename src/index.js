document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const newTaskDescription = document.querySelector("#new-task-description");
  const tasksContainer = document.querySelector("#tasks");

  function submitForm(event) {
    event.preventDefault();
    const tasks = document.createElement("li");
    tasks.textContent = newTaskDescription.value;
    tasksContainer.appendChild(tasks);
  }

  taskForm.addEventListener("submit", submitForm);
});

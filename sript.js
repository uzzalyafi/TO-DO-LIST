// Select 
const form = document.getElementById("form");
const taskSubmit = document.getElementById("input-task");
const taskList = document.getElementById("tasks-list");

// Event
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const tasks = taskSubmit.value;
  
  if (!tasks) {
    alert("Please Write A Task");
    return;
  }

  // Create Task-contain div
  const taskContain = document.createElement("div");
  taskContain.classList.add("task-contain");
  taskList.appendChild(taskContain);
  //Create task
  const task = document.createElement("div");
  task.classList.add("task");
  taskContain.appendChild(task);
  // Create input
  const taskInput = document.createElement("input");
  taskInput.type = "taxt";
  taskInput.value = taskSubmit.value;
  taskInput.setAttribute("readonly", "readonly");
  task.appendChild(taskInput);
  // Create Action btn
  const action = document.createElement("div");
  action.classList.add("action");
  task.appendChild(action);
  // Create edit buttoon
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerText = "Edit";
  action.appendChild(editBtn);
  // Create delete buttoon
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerText = "Delete";
  action.appendChild(deleteBtn);

  taskSubmit.value = "";

  // Action button Event
  editBtn.addEventListener("click", ()=> {
    if (editBtn.innerText.toLowerCase() === "edit") {
      editBtn.innerText = "Save";
      taskInput.removeAttribute("readonly");
      taskInput.focus();
      taskInput.style.outline = "1px solid greenyellow";
      taskInput.style.border = "1px solid greenyellow";
    } else {
      editBtn.innerText = "Edit";
      taskInput.setAttribute("readonly", "readonly");
      taskInput.style.outline = "0";
      taskInput.style.border = "0";
    }
  })
  deleteBtn.addEventListener("click", (e)=>{
    taskList.removeChild(taskContain);
  })











})
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const addBtn = document.querySelector("#add-btn");
   const textbox = document.querySelector("#new-task");
   const taskList = document.querySelector("ol");

   // Register event handlers
   addBtn.addEventListener("click", addBtnClick);

   // Allow task to be added by pressing Enter
   textbox.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   const textbox = document.querySelector("#new-task");
   const task = textbox.value.trim();  // Get and trim the task input

   // Prevent adding empty tasks
   if (task === "") {
      return;
   }

   // Add the task to the list
   addTask(task);

   // Clear the textbox and put focus back on it
   textbox.value = "";
   textbox.focus();
}

function addTask(task) {
   const taskList = document.querySelector("ol");

   // Create a new <li> element
   const li = document.createElement("li");

   // Set the inner HTML of the <li> element
   li.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   // Append the new <li> to the ordered list
   taskList.appendChild(li);

   // Register the click event for the done button to remove the task
   const doneBtn = li.querySelector(".done-btn");
   doneBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
   // Get the <li> element that contains the task
   const li = event.target.parentNode;

   // Remove the <li> element from the list
   const taskList = document.querySelector("ol");
   taskList.removeChild(li);
}

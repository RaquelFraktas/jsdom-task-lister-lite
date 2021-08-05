document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");

  taskForm.addEventListener("submit", function(e){
    e.preventDefault();
    const newTaskDescription = e.target[0].value;
    const taskList = document.getElementById("tasks");
    const newListItem= document.createElement("li");
    newListItem.innerHTML= newTaskDescription;
    taskList.append(newListItem);
  });
 
});




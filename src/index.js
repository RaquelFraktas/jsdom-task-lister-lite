document.addEventListener("DOMContentLoaded", () => {
  submitOnClick();
  
});

const taskForm = document.querySelector("#create-task-form");
const newTaskDescription = document.getElementById("#new-task-description").value;
const taskList = document.getElementById("#tasks");


function submitOnClick(){
  taskForm.addEventListener("click", function(e){
    e.preventDefault();
    taskList.innerHTML+= newTaskDescription;
  });
}
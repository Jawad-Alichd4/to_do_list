function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

var li = document.createElement('li');
li.textContent = taskInput.value;
if (taskInput.value === '') 
   return alert("enter some text to add to list")

var removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.className = 'remove-button';
li.appendChild(removeButton)
taskList.appendChild(li)

removeButton.onclick = function () {
    taskList.removeChild(li);

};

taskInput.value = '';

}


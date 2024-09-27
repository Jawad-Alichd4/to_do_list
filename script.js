function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

var li = document.createElement("li");
li.textContent = taskInput.value;
if (taskInput === "") {
    alert("enter some text to add to list")

}

var removeButton = document.createElement("button");
removeButton.textContent = "remove";
removeButton.className = "remove-button";
removeButton.onClick = function() {
    taskList.removeChild(li);

};

li.onClick = function() {
    li.classList.toggle("completed");
};

li.appendChild(removeButton);

taskList.appendChild(li);
taskInput.value = '';



}


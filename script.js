function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    li.textContent = task;

    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

const tasks = [

];
let draggedTask = null;
const titleInput = document.getElementById("task-input");
const taskDifficulty = document.getElementById("task-difficulty");
const taskCategory = document.getElementById("task-category");
const addBtn = document.getElementById("add-btn");
let idcount = 0;
const todoTaskList = document.querySelector("#todo .task-list");
const progressTaskList = document.querySelector("#in-progress .task-list");
const reviewTaskList = document.querySelector("#under-review .task-list");
const finishedTaskList = document.querySelector("#finished .task-list");

addBtn.addEventListener("click", function () {
    tasks.push({
        id: ++idcount,
        title: titleInput.value,
        difficulty: taskDifficulty.value,
        category: taskCategory.value
    })
    rendertasks();
})

function rendertasks() {
    todoTaskList.innerHTML = "";
    progressTaskList.innerHTML = "";
    reviewTaskList.innerHTML = "";
    finishedTaskList.innerHTML = "";
    tasks.forEach(function (task) {
        const card = document.createElement("div");
        card.className = "task-card";
        card.draggable = true;

        card.addEventListener("dragstart", function () {
            draggedTask = task;
        });


        const title = document.createElement("h3");
        title.textContent = task.title;
        const difficulty = document.createElement("span");
        difficulty.textContent = task.difficulty;
        difficulty.className = "difficulty";
        const category = document.createElement("span");
        category.textContent = task.category;
        category.className = "category"

        card.appendChild(title);
        card.appendChild(difficulty);
        card.appendChild(category);


        if (task.category === "todo") {
            todoTaskList.appendChild(card);
        }
        else if (task.category === "in-progress") {
            progressTaskList.appendChild(card);
        }
        else if (task.category === "under-review") {
            reviewTaskList.appendChild(card);
        }
        else if (task.category === "finished") {
            finishedTaskList.appendChild(card);
        }
    })
}
const taskLists = {
    todo: todoTaskList,
    "in-progress": progressTaskList,
    "under-review": reviewTaskList,
    finished: finishedTaskList
};


Object.entries(taskLists).forEach(function ([category, list]) {
     list.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    list.addEventListener("drop", function () {
        draggedTask.category = category;
        rendertasks();
    });
});





const task = [];
let taskIndex = -1;

// class structureTask {
//     constructor(title,  )
// }

function addTask() {
    const edit = document.getElementById("edit").value;
    const check = document.getElementById("check").value;
    const trash = document.getElementById("trash").value;
}

if (edit && check && trash) {
    if (taskIndex == -1) {
        baseTask(edit, check, trash);
        cleanTask();
        showTask();

    } else {
        task[taskIndex] = {
            edit,
            check,
            trash,
        };
    }

baseTask(edit, check, trash);

trashTask()

}

function trashTask() {
    const edit = getElementById("edit").value = "";
    const check = getElementById("checkt").value = "";
    const trash = getElementById("trash").value = "";
}

function editTask() {
    const task = task[index];

    const edit = getElementById("edit").value = task.edit;
    const check = getElementById("check").value = check.check;
    const trash = getElementById("trash").value = check.trash;

    taskIndex = index;

}


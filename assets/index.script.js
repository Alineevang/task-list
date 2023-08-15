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
} 
baseTask
  
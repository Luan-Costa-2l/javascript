const cloneTaskModel = () => {
    const taskModel = document.querySelector('.models .todo__listItem');
    const taskModelClone = taskModel.cloneNode(true);
    return taskModelClone;
}

const setTaskContent = (task, value) => {
    const textTask = task.querySelector('.todo__listText');
    textTask.textContent = value;
}

const setTaskOnScreen = () => {
    const input = document.querySelector('.todo__searchInput');
    const value = input.value.trim();
    if (value !== '') {
        const task = cloneTaskModel();
        setTaskContent(task, value);
        document.querySelector('.todo__list').appendChild(task);
        input.value = '';
        addDoneTaskListener();
    }
}

document.querySelector('.todo__searchIcon').addEventListener('click', setTaskOnScreen);

const cloneTaskModel = () => {
    const taskModel = document.querySelector('.models .todo__listItem');
    const taskModelClone = taskModel.cloneNode(true);
    return taskModelClone;
}

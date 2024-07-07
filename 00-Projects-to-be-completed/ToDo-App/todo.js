function getTaskInput(){
    const task = document.querySelector('#task');
    setTask(task.value);
    task.value = '';
}

function setTask(task){
    const taskList = document.querySelector('#task-list');
    const newTask = document.createElement('li');
    newTask.textContent = task;
    console.log(taskList.getElementsByTagName('li'))

    //Remove task Button

    const closeTask = document.createElement('button');
    closeTask.textContent = 'X'
    newTask.appendChild(closeTask);


    //add to page 
    taskList.appendChild(newTask)
}





const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', getTaskInput);
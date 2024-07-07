function getTaskInput(){
    const task = document.querySelector('#task');
    setTask(task.value);
    task.value = '';
}

function removeTask(){
    
}

function setTask(task){
    const taskList = document.querySelector('#task-list');
    const newTask = document.createElement('li');
    newTask.textContent = task;

    //Remove task Button

    const closeTask = document.createElement('button');
    closeTask.textContent = 'X'
    closeTask.classList.add('close-task');

    closeTask.addEventListener('click', function(){
        taskList.removeChild(newTask);
    });
    newTask.appendChild(closeTask);


    //add to page 
    taskList.appendChild(newTask)
}





const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', getTaskInput);
import React, {userState} from 'react'

function input(){
    const [task, setTask] = useState('');



    return(
    <div>
        <label htmlFor='taskInput'>Task: </label>
        <input id='taskInput'type="text" />
        <button id='btnAddTask'>Add Task</button>
    </div>

)};

export{input}
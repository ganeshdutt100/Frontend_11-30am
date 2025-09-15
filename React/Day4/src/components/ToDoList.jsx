import React, { useState } from 'react'

const ToDoList = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])


    const addTask = () => {
        if (task === "") return;
        setTasks([...tasks, task])
        setTask("");
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((t, i) => i !== index)
        setTasks(newTasks)
    }


    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add Task here...' />
            <button onClick={addTask}>Add</button>

            <ul>

                {tasks.map((t, index) => (
                    <li key={index}>{t} {" "}
                    <button onClick={()=>deleteTask(index)} >Delete</button>
                    <button >Edit</button>
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default ToDoList
import React, {useState} from 'react';
import './fashion.css'

function ToDoList(){


    const [task, setTask] = useState(["Wake up", "Dress up", "Skibidi"]);
    const [newTask, setNewTask] = useState("");



    const handleChange = (event) => {
        setNewTask(event.target.value)
    }

    const handleAdd = () => {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask])
            setNewTask("");
        }
    }

    const handleDelete = (index) => {
        const newList = task.filter((item) => item !== index);
        setTask(newList);
    }

    const handleDone = (index) => {
        const changeText = document.getElementById('change-text')
        changeText.addEventListener("click", function() {
        changeText = document.getElementById('change-text').style.textDecoration = "line-through";
        })
    }
    
    
    return(
        <>
            <div className='cardboard'>
                <div className='written'>
                    <div className='title'>
                        <h1>To Do List:</h1>
                    </div>
                    <div className='tasks'>
                        {task.map((item) => <li id='change-text'>{item}
                            <button className='button-three' onClick={() => handleDone(item)}>Done</button>
                            <button className='button-red' onClick={() => handleDelete(item)}>Delete</button></li>)}
                    </div>
                    <div className='input'>
                        <input type='text' placeholder='Type your task' className='input-section' value={newTask} onChange={handleChange}></input>
                        <button className='add-button' onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList
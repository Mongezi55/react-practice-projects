import React, { useState } from 'react';
import styles from './ToDoList.module.css';

function ToDoList(){

    const [tasks, setTasks] = useState(["Midnight Prayer"]);
    const [newTask, setNewTask] = useState("");

    // sets new task as the text in the input field
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    // Adds task to the tasks array
    function handleAddTask(){
        if(newTask.trim !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask(""); // Resets input field to be empty
        }
    }

    // Removes a task from the tasks list
    function handleRemoveTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        //We will be using array destructing to switch two indexeds inside an array
        
        if(index > 0){ // Only move up if it's not the first element
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            
            setTasks(updatedTasks);
        }
        
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){ // Only move up if it's not the first element
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            
            setTasks(updatedTasks);
        }
        
    }

    return(
        <div className={styles.to_do_ist}>
            <h1>To Do List</h1>

            <input type='text'
                   value={newTask}
                   placeholder='Enter a task...'
                   onChange={handleInputChange}/>

            <button onClick={handleAddTask} className={styles.add_button}>Add</button>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>

                        <button className={styles.delete_button} onClick={() => handleRemoveTask(index)}>
                            Remove
                        </button>
                        <button className={styles.move_button} onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button className={styles.move_button} onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>

                    
                )}
            </ol>
        </div>
    )
}
export default ToDoList;


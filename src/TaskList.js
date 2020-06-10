import React from 'react';


const TaskList = (props) => {
    return props.tasks.map((task) => {
        return <div style={{display : "flex"}}>
                <div style={{textDecoration : !task.completed ? "none" : "line-through"}} key={task.id} onClick={() => props.onTaskClick(task.id)}>{task.desc}</div>
                <button onClick={() => props.onDelete(task.id)}>x</button>
            </div>
    })           
}
export default TaskList;

//TODO: Add functionality to show tasks which have been completed but not yet deleted
//TODO: Add functionality to show incomplete tasks
//TODO: Add functionality to delete all incomplete taks
//TODO: Add functionality to show the number of complete tasks
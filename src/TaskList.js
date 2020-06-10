import React from 'react';


const TaskList = (props) => {
    return (<div>
        {props.tasks.map((task) => <div style={{textDecoration : !task.completed ? "none" : "line-through"}} key={task.id} onClick={() => props.onTaskClick(task.id)}>{task.desc}</div>)}
    </div>);
}

export default TaskList;

//TODO: Add functionality to delete completed items through a button
//TODO: Add functionality to show tasks which have been completed but not yet deleted
//TODO: Add functionality to show incomplete tasks
//TODO: Add functionality to delete all incomplete taks
//TODO: Add functionality to show the number of complete tasks
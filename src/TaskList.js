import React from 'react';


const TaskList = (props) => {
    return (<div>
        {props.tasks.map((task) => <div style={{textDecoration : !task.completed ? "none" : "line-through"}} key={task.id} onClick={() => props.onTaskClick(task.id)}>{task.desc}</div>)}
    </div>);
}

export default TaskList;

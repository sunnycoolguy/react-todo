import React from 'react';


class TaskList extends React.Component{
    render(){
        return this.props.tasks.map((task) => <div>{task}</div>);
    }
}

export default TaskList;
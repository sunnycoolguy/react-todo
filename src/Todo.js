import React from 'react';
import TaskList from './TaskList.js';


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            tasks: [{id: 0, desc:'Take the dog out for a walk', completed: false}, {id: 1, desc:'Break dance', completed: false}, {id: 2, desc:'Do a barrel roll', completed: false}],
            lastId: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTaskClick = this.handleTaskClick.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            text : event.target.value
        });
    }

    handleKeyDown = (event) => {
        if(event.keyCode === 13){
            const newId = this.state.lastId + 1;
            const newTask = {id: newId, desc : this.state.text, completed: false};
            this.setState({
                tasks : [...this.state.tasks, newTask],
                text : '',
                lastId: newId
            });
        }
    }

    handleTaskClick = (taskID) => {
        this.setState({
            tasks : this.state.tasks.map((task) => {
                if (task.id === taskID){
                    task.completed = !task.completed;
                    return task;
                } else {
                    return task;
                }
            })
        })
    }


    render(){
        return <div>
            <input value={this.state.text} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}/>
            <p>Here are your tasks: </p>
            <TaskList tasks={this.state.tasks} onTaskClick={this.handleTaskClick}/>
        </div>
    }


}

export default Todo;
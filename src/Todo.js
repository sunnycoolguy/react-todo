import React from 'react';
import TaskList from './TaskList.js';


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            tasks: ['Take the dog out for a walk', 'Break dance', 'Do a barrel roll']
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            text : event.target.value
        });
    }

    handleKeyDown = (event) => {
        if(event.keyCode === 13){
            this.setState({
                tasks : [...this.state.tasks, this.state.text],
                text : ''
            });
        }
    }


    render(){
        return <div>
            <input value={this.state.text} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}/>
            <p>Here are your tasks: </p>
            <TaskList tasks={this.state.tasks}/>
        </div>
    }


}

export default Todo;
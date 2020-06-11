import React from 'react';
import TodoList from './TodoList.js';
import TodoCounter from './TodoCounter.js';


class TodoApp extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            text: '',
            todos: [{id: 0, desc:"Take the dog out for a walk", status: "active"}, {id: 1, desc:"Break dance", status: "active"}, {id: 2, desc:"Do a barrel roll", status: "active"}],
            lastId: 2,
            show: "all"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleDelteAllComplete = this.handleDelteAllComplete.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            text : event.target.value
        });
    }

    handleKeyDown = (event) => {
        if(event.keyCode === 13){
            const newId = this.state.lastId + 1;
            const newTask = {id: newId, desc : this.state.text, status: "active"};
            this.setState({
                todos : [...this.state.todos, newTask],
                text : '',
                lastId: newId
            });
        }
    }

    handleTodoClick = (todoID) => {
        this.setState({
            todos : this.state.todos.map((todo) => {
                if (todo.id === todoID){
                    todo.status = todo.status === "active" ? "complete" : "active";
                    return todo;
                } else {
                    return todo;
                }
            })
        });
    }

    handleDelete = (todoID) => {
        this.setState({
            todos : this.state.todos.filter((todo) => todo.id !== todoID)
        })
    }

    handleDelteAllComplete = (event) => {
        this.setState({
            todos : this.state.todos.filter((todo) => todo.status === "active")
        })
    }

    handleAction = (event) => {
        this.setState({
            show : event.target.value 
        });
    }

    render(){
        return <div>
            <input placeholder="Enter a todo" value={this.state.text} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}/>
            <p>Here are your tasks: </p>
            <TodoList todos={this.state.todos} onTodoClick={this.handleTodoClick} onDelete={this.handleDelete} show={this.state.show}/>
            <TodoCounter todos={this.state.todos}/>
            <div id="action-bar" class="flex">
                <button onClick={this.handleAction} value="all">Show All</button>
                <button onClick={this.handleAction} value="active">Show Active</button>
                <button onClick={this.handleAction} value="complete">Show Complete</button>
                <button onClick={this.handleDelteAllComplete}>Delete All Complete Tasks</button>
            </div>
        </div>
    }


}

export default TodoApp;






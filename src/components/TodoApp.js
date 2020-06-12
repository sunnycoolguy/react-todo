import React from 'react';
import TodoList from './TodoList.js';
import TodoCounter from './TodoCounter.js';
import TodoActionBar from './TodoActionBar.js';
import '../stylesheets/TodoApp.css';
import logo from '../images/react-logo.png';


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
        return <div className="app-container">
            <h1>React Todo List App</h1>
            <input placeholder="Enter a todo" value={this.state.text} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}/>
            <p>Here are your tasks: </p>
            <TodoList todos={this.state.todos} onTodoClick={this.handleTodoClick} onDelete={this.handleDelete} show={this.state.show}/>
            <TodoCounter todos={this.state.todos}/>
            <TodoActionBar onAction={this.handleAction} onDelteAllComplete={this.handleDelteAllComplete}/>
            <img className="logo" alt="the react logo" src={logo}/>
        </div>
    }
}

export default TodoApp;






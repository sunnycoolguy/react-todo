import React from 'react';
import "../stylesheets/TodoList.css";
import cancel from "../images/x-button.png";

const TodoList = (props) => {
    let todos = [];

    if (props.show === "all"){
        todos = props.todos;
    } else if (props.show === "active"){
        todos = props.todos.filter(todo => todo.status === "active");
    } else {
        todos = props.todos.filter(todo => todo.status === "complete")
    }

    return todos.map((todo) => {
        return <div className="list">
            <div style={{textDecoration : todo.status === "active" ? "none" : "line-through"}} key={todo.id} onClick={() => props.onTodoClick(todo.id)}>{todo.desc}</div>
            <img className="remove" src={cancel} onClick={() => props.onDelete(todo.id)} alt="remove item"/>
        </div>
    });
}

export default TodoList;


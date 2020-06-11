import React from 'react';


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
        return <div style={{display : "flex"}}>
            <div style={{textDecoration : todo.status === "active" ? "none" : "line-through"}} key={todo.id} onClick={() => props.onTodoClick(todo.id)}>{todo.desc}</div>
            <button onClick={() => props.onDelete(todo.id)}>x</button>
        </div>
    });
}

export default TodoList;


import React from 'react';

const TodoCounter = (props) => {
    const counter = props.todos.filter((todo) => todo.status === 'active').length;
    return <p>{`Todos left: ${counter}`}</p>
}

export default TodoCounter;
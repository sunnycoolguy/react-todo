import React from 'react';

const TodoActionBar = (props) => {
    return (<div id="action-bar" class="flex">
        <button onClick={props.onAction} value="all">Show All</button>
        <button onClick={props.onAction} value="active">Show Active</button>
        <button onClick={props.onAction} value="complete">Show Complete</button>
        <button onClick={props.onDelteAllComplete}>Delete All Complete Tasks</button>
    </div>);
}

export default TodoActionBar;
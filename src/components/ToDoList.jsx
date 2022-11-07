import React from 'react';

// harus mengkonsumsi props
const ToDoList = ({propsTodos :todos}) => {

    return (
        <>
        <h4>List Todo</h4>
        <ul>
            {/* looping todo */}
            {
                todos.map((todo) => {
                    return <li>{todo}</li>
                })
            }
        </ul>
    </>
    )
};

export default ToDoList;
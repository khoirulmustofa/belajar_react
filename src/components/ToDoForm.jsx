// Di sini kita perlu menggunakan local state component ini saja
// jadi membutuhkan useState
import React, { useState } from 'react';

// ToDoForm menerima data dari App.js
// jadi ditangkap dengan props
const ToDoForm = (props) => {
    // ini adalah local state untuk menampung nilai dari input text
    const [inputTodo, setInputTodo] = useState('');

    // ini adalah fungsi yang digunakan untuk melihat perubahan nilai
    // dari input text
    const inputOnChangeHandler = (event) => {
        const dataInput = event.target.value;
        console.log("inputOnChangeHandler :",dataInput);
        setInputTodo(dataInput);
    };

    // ini adalah fungsi untuk submit form
    // perhatikan di sini ada menggunakan props.propsSubmitHandler
    // yang merupakan suatu fungsi (bisa di-invoke)
    const localSubmitHandler = (event) => {
        console.log("localSubmitHandler :",inputTodo);
        event.preventDefault();
        props.propsSubmitHandler(inputTodo);
        // setelah selesai, kosongkan input
        setInputTodo('');
    };

    return (
        <div>
            <form action="" onSubmit={localSubmitHandler}>
                <div style={{ marginBottom: "0.25em" }}>
                    <label htmlFor="todoText">Input Todo yang baru</label>
                    <input type="text" name='todo-text' id='todoText' value={inputTodo} onChange={inputOnChangeHandler}/>
                </div>
                <button type="submit">Tambah Todo</button>
            </form>
        </div>
    )
};

export default ToDoForm;
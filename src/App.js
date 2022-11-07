import React, { useState } from "react";
import ButtonClass from "./components/ButtonClass";
import ButtonFunctional from "./components/ButtonFunctional";
import ToDoForm from "./components/ToDoForm";
import ToDoIncrement from "./components/ToDoIncrement";
import ToDoList from "./components/ToDoList";

function App() {
  // const todos = ["Belajar React 1", "Belajar React 2", "Belajar React 3", "Belajar React 4", "Belajar React 5"];
  const [todos, setTodos] = useState([
    "Belajar React 1",
    "Belajar React 2",
    "Belajar React 3",
    "Belajar React 4",
    "Belajar React 5",
  ]);

  // di sini kita akan membuat sebuah function
  // yang digunakan untuk submitHandler di ToDoForm
  const formSubmitHandler = (todoYangBaru) => {
    console.log("todo dari parent", todoYangBaru);
    // krn todos di agggab imutable, so tidak boleh push
    // maka harus menggunakan spred
    setTodos([...todos, todoYangBaru]);
    console.table(todos);
  };

  return (
    <>
      <div
        className="App"
        style={{ display: "flex", flexDirection: "row", gap: "0.5em" }}
      >
        <ButtonClass text="Button Class Dari Props" />
        <ButtonFunctional text="Button Functional Dari Props" />
      </div>
      <hr />
      <h2>React JS - Komponen dan UI Framework</h2>
      <header>
        <h1>Aplikasi ToDo List</h1>
      </header>
      <section style={{ margin: "1em 0em" }}>
        {/* Di sini sekarang harus menggunakan props */}
        {/* Pada form kita harus melempar setTodos dan todos */}
        <ToDoForm propsSubmitHandler={formSubmitHandler}/>
        {/* Pada list kita hanya butuh todos saja */}
        <ToDoList propsTodos={todos}/>
      </section>
      <section>
        <ToDoIncrement />
      </section>
      <footer>
        <h3>Dibuat oleh orang sedang belajar React &copy; 2022</h3>
      </footer>
    </>
  );
}

export default App;

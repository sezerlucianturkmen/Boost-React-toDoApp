import React from "react";
import { useState } from "react";

function TodoForm({ todosFalse, setTodosFalse }) {
  console.log("TodoForm");
  const [todo, setTodo] = useState({
    userId: 1,
    id: 1,
    title: "",
    completed: false,
    date: null,
  });

  const myid = todosFalse === [] ? 0 : todosFalse[0]?.id + 1;
  const addTodo = () => {
    setTodosFalse([todo, ...todosFalse]);
    setTodo({ title: "" });
  };
  const oncahngeTodo = (e) => {
    const { name, value } = e.target;

    setTodo((t) => ({
      ...t,
      [name]: value,
      completed: false,
      id: myid,
    }));
  };
  return (
    <form className="row flex-col mx-auto justify-center w-50 mt-5">
      <input
        value={todo.title}
        type="text"
        id="title"
        name="title"
        placeholder="Lütfen Bir Todo Giriniz"
        className="w-50 rounded-md border px-2 my-3 "
        onChange={oncahngeTodo}
      ></input>
      <input
        type="date"
        id="date"
        name="date"
        className="w-auto border rounded-md"
        onChange={oncahngeTodo}
      ></input>

      <button
        type="button"
        className="hover:bg-blue-800 w-50 m-auto mt-4 p-1 
  rounded font-medium cursor-pointer bg-blue-600 text-white"
        onClick={addTodo}
      >
        Todo ekle
      </button>
    </form>
  );
}

export default TodoForm;
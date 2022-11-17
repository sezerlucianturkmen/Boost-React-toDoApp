import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "./component/Table";
function Todo() {
  console.log("Todo");
  const [todos, setTodos] = useState([]);
  // const [content, setContent] = useState();
  // const [date, setDate] = useState();
  const [todo, setTodo] = useState({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    date: null,
  });

  // const onChangeContent = (e) => {
  //   setContent(e.target.value);
  // };
  // const onChangeDate = (e) => {
  //   setDate(e.target.value);
  // };
  const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("her renderda çalışır");
  });

  useEffect(() => {
    loadData();
  }, []);

  const oncahngeTodo = (e) => {
    const { name, value } = e.target;

    setTodo((t) => ({
      ...t,
      [name]: value,
      state: false,
      id: todos.length + 1,
    }));
  };

  // const addTodo = (e) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       content: content,
  //       date: date,
  //     },
  //   ]);
  // };
  const addTodo = (e) => {
    setTodos([...todos, todo]);
  };
  const delteTodo = (e) => {
    // let x = todos.splice(index, 1);
    let index = e.target.value;
    let list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  };

  const editTodo = (e) => {
    let index = e.target.value;
    let list = [...todos];
    let newTodo = list[index];
    newTodo.state = true;

    setTodos([...list]);
  };

  return (
    <div className="w-full h-full container flex-col justify-center items-center">
      <h1 className="text-center text-slate-500 font-bold"> Todo App</h1>
      <div>
        <form className="row flex-col mx-auto justify-center w-50 mt-5">
          <input
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
      </div>

      <div>
        <Table
          head={["Sıra No", "Yapılacklar", "Tarih", "Durum", "İşlemler"]}
          body={todos.map((data, index) => [
            data.id,
            data.title,
            data.date,
            data.completed.toString(),
            [
              <button
                value={index}
                onClick={delteTodo}
                className="btn btn-danger w-20 mx-1"
              >
                Sil
              </button>,
              <button
                value={index}
                onClick={editTodo}
                className="btn btn-warning w-20 "
              >
                Düzenle
              </button>,
            ],
          ])}
          editTodo={editTodo}
          delteTodo={delteTodo}
        ></Table>
      </div>
    </div>
  );
}

export default Todo;

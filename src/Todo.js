import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useState } from "react";
import Panel from "./component/Panel";
import Tab from "./component/Tab";
import Table from "./component/Table";
import TodoForm from "./component/TodoForm";
function Todo() {
  console.log("Todo");
  const [todos, setTodos] = useState([]);
  const [todosFalse, setTodosFalse] = useState([]);
  // const [content, setContent] = useState();
  // const [date, setDate] = useState();
  // const [todo, setTodo] = useState({
  //   userId: 1,
  //   id: 1,
  //   title: "",
  //   completed: false,
  //   date: null,
  // });

  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);

  const [isLoading, setIslodaing] = useState(false);
  const [isLoadingFirst, setIslodaingFirst] = useState(false);
  // const onChangeContent = (e) => {
  //   setContent(e.target.value);
  // };
  // const onChangeDate = (e) => {
  //   setDate(e.target.value);
  // };
  const loadData = async () => {
    let list = [];
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        list = [...data];
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIslodaingFirst(false);
        setIslodaing(false);
      });

    await list.sort((a, b) => b.id - a.id);

    setTodos([
      ...todos,
      ...list.filter((x) => x.completed === true).slice(count, pageSize),
    ]);
    setTodosFalse([
      ...todosFalse,
      ...list.filter((x) => x.completed === false).slice(count, pageSize),
    ]);
  };

  useEffect(() => {
    console.log("her renderda çalışır");
  });

  useEffect(() => {
    if (count === 0) {
      setIslodaingFirst(true);
    }

    setTimeout(() => {
      loadData();
    });
  }, [pageSize]);

  // const oncahngeTodo = (e) => {
  //   const { name, value } = e.target;

  //   setTodo((t) => ({
  //     ...t,
  //     [name]: value,
  //     completed: false,
  //     id: todos.length + 1,
  //   }));
  // };

  // const addTodo = (e) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       content: content,
  //       date: date,
  //     },
  //   ]);
  // };
  // const addTodo = (e) => {
  //   setTodos([...todos, todo]);
  //   setTodo({ title: "" });
  // };
  const delteTodo = (e) => {
    // let x = todos.splice(index, 1);
    let index = e.target.value;
    let list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  };
  const editTodo = (e) => {
    console.log(e.target.value);
    let index = e.target.value;
    let list = [...todos];
    let newTodo = list[index];

    newTodo.completed
      ? (newTodo.completed = false)
      : (newTodo.completed = true);

    setTodos([...list]);
  };

  const loadMore = () => {
    setIslodaing(true);
    setCount(count + 10);
    setPageSize(pageSize + 10);
    console.log(pageSize);
    console.log(count);
  };

  return (
    <>
      {isLoadingFirst ? (
        <div className=" w-full container">
          <iframe
            height={500}
            className="w-full text-center"
            src="https://embed.lottiefiles.com/animation/93816"
          ></iframe>
          <h1 className="text-center"> Sayfa Yükleniyor... </h1>
        </div>
      ) : (
        <div className="w-full h-full container flex-col justify-center items-center">
          <h1 className="text-center text-slate-500 font-bold"> Todo App</h1>
          <div>
            <TodoForm
              todosFalse={todosFalse}
              setTodosFalse={setTodosFalse}
            ></TodoForm>
          </div>
          <div>
            <Tab activeTab={0}>
              <Table
                title="Yaptıklarım"
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
              <Table
                title="Yapacaklarım"
                head={["Sıra No", "Yapılacklar", "Tarih", "Durum", "İşlemler"]}
                body={todosFalse.map((data, index) => [
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
            </Tab>
          </div>

          {isLoading ? (
            <iframe
              className="w-full text-center"
              src="https://embed.lottiefiles.com/animation/103617"
              title="loading"
            ></iframe>
          ) : (
            <div onClick={loadMore} className="w-full btn btn-secondary">
              Daha fazla Veri Yükle
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Todo;
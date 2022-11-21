import React from "react";
import Table from "./component/Table";
import TodoForm from "./component/TodoForm";
import { useSelector } from "react-redux";
function NewTodoPage() {
  const isLoadingFirst = useSelector((state) => state.todoSlice.isloadingFirst);
  const isLoading = useSelector((state) => state.todoSlice.isLoading);
  const todos = useSelector((state) => state.todoSlice.todos);
  console.log(isLoadingFirst);
  console.log(isLoading);
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
            {" "}
            <TodoForm></TodoForm>
          </div>
          <div>
            <Table
              title="Yaptıklarım"
              head={["Sıra No", "Yapılacklar", "Tarih", "Durum", "İşlemler"]}
              body={todos.map((data, index) => [
                data.id,
                data.title,
                data.date,
                data.completed.toString(),
              ])}
            ></Table>
          </div>

          {isLoading ? (
            <iframe
              className="w-full text-center"
              src="https://embed.lottiefiles.com/animation/103617"
              title="loading"
            ></iframe>
          ) : (
            <div className="w-full btn btn-secondary">
              Daha fazla Veri Yükle
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NewTodoPage;
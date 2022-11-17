import React from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

function Table({ head, body, editTodo, delteTodo }) {
  return (
    <div>
      <table className="table">
        <Thead head={head}></Thead>
        <Tbody body={body}></Tbody>
      </table>
    </div>
  );
}

{
  /* <tbody>
{todos.map((data, index) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{data.content}</td>
      <td>{data.date}</td>
      <td>{data.state.toString()}</td>
      <td className="flex justify-center">
        <div className="text-center">
          <button
            value={index}
            onClick={delteTodo}
            className="btn btn-danger w-20 mx-1"
          >
            Sil
          </button>
          <button
            value={index}
            onClick={editTodo}
            className="btn btn-warning w-20 "
          >
            Düzenle
          </button>
        </div>
      </td>
    </tr>
  );
})}
</tbody> */
}

export default Table;

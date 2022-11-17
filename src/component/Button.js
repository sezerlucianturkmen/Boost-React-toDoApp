import React from "react";

function Button({ children, text, liste, varriant, user }) {
  //   const { text, liste, varriant } = props;
  //   const { name, id } = props.user;

  console.log(children);
  const { name, id } = user;
  const selectVarriant = () => {
    switch (varriant) {
      case "warning":
        return (
          <button className="flex bg-yellow-400  items-center text-center p-2 my-2 mx-2">
            {children} {varriant} {name}
            {liste === undefined ? "" : liste[0]}
          </button>
        );

      case "danger":
        return (
          <button className="flex bg-red-400  items-center text-center p-2 my-2 mx-2">
            {children} {varriant} {name}
            {liste === undefined ? "" : liste[0]}
          </button>
        );

      case "succsess":
        return (
          <button className="flex bg-green-400  items-center text-center p-2 my-2 mx-2">
            {children} {varriant} {name}
            {liste === undefined ? "" : liste[0]}
          </button>
        );

      default:
        return (
          <button className="flex bg-gray-400  items-center text-center p-2 my-2 mx-2">
            {children} {varriant} {name}
            {liste === undefined ? "" : liste[0]}
          </button>
        );
    }
  };

  const selectVarriant2 = () => {
    switch (varriant) {
      case "warning":
        return "bg-yellow-400";
      case "danger":
        return "bg-red-400";
      case "succsess":
        return "bg-green-400";
      default:
        return "bg-gray-400";
    }
  };

  const sınıfismi =
    selectVarriant2() + " flex items-center text-center p-2 my-2 mx-2";

  return (
    //============3.YÖNTEM======================
    <div>
      <button className={sınıfismi}>
        {children} {varriant} {name}
        {liste === undefined ? "" : liste[0]}
      </button>
    </div>

    //============2.  YÖNTEM======================
    // <div>{selectVarriant()}</div>

    //============1.  YÖNTEM======================
    // <div>
    //   {varriant === "warning" ? (
    //     <button className="flex bg-yellow-400  items-center text-center p-2 my-2 mx-2">
    //      {children}  {varriant} {name}
    //       {liste === undefined ? "" : liste[0]}
    //     </button>
    //   ) : (
    //     <button className="flex bg-red-400  items-center text-center p-2 my-2 mx-2">
    //       {children}  {varriant}
    //       {liste === undefined ? "" : liste[0]}
    //       {id}
    //     </button>
    //   )}
    // </div>
  );
}

export default Button;

import React from "react";

function NewUserList({ userlistesi }) {
  return (
    <div className="container">
      <div>
        <ul>
          {userlistesi.map((data, index) => {
            return (
              <li key={index}>
                <div>
                  <span>{data.id}</span>
                  <span>{data.name}</span>
                  <span>{data.adress.country}</span>
                  <span>{data.adress.city}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewUserList;

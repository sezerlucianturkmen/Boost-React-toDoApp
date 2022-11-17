import React from "react";

function UserList({ userlistesi }) {
  return (
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
  );
}

export default UserList;

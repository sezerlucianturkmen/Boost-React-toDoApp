import React, { useEffect, useState } from "react";
import NewUserList from "./component/NewUserList";
import UserList from "./component/UserList.Js";

import { userList } from "./database/User";
function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userList);
  });
  return (
    <div>
      <NewUserList userlistesi={users}></NewUserList>
    </div>
  );
}

export default UserPage;

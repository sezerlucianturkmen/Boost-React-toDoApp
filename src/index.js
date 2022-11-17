import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NewPage from "./NewPage";

import Todo from "./Todo";
import UserPage from "./UserPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todo></Todo>
  </React.StrictMode>
);

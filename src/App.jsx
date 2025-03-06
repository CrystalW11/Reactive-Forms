/** @format */

import "./App.css";
import Form from "./components/Form.jsx";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  return (
    <>
      <div className="card-body form-control">
        <h1>Welcome. Please Submit the form</h1>
        <Form
          userList={userList}
          setUserList={setUserList}
          className="form-control"
        />
      </div>
    </>
  );
}

export default App;

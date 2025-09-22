import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  let name = "munish";
  let userObj = { name: "munish", age: "30", email: "munish@test.com" };
  let users = [
    { name: "munish", age: "30", email: "munish@test.com" },
    { name: "kamal", age: "35", email: "kamal@test.com" },
    { name: "nath", age: "38", email: "nath@test.com" },
  ];
  return (
    <>
      <h1>React-Props</h1>
      <Login />
      {/* <Header name={name} /> */}
      <Header user={users} />
    </>
  );
}

export default App;

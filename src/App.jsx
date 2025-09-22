import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { Profile, userDetails } from "./components/Login";
import Counter from "./components/counter";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Login />
      <Profile />
      <Counter />
      <h1>{userDetails}</h1>
      <h1> Hello React</h1>
      <h1>code By Example</h1>
    </>
  );
}

export default App;

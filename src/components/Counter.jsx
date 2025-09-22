import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCounter = (event) => {
    switch (event.target.value) {
      case "increment":
        setCount(count + 1);
        break;
      case "decrement":
        setCount(count - 1);
        break;
      default:
        count;
        break;
    }
    console.log({ event });
    // if (event.target.value == "increment") {
    //   setCount(count + 1);
    // } else {
    //   setCount(count - 1);
    // }
  };

  return (
    <>
      <h1> Counter is: {count}</h1> <br />
      <button onClick={(event) => handleCounter(event)} value="increment">
        increase counter
      </button>
      <button onClick={(event) => handleCounter(event)} value="decrement">
        decrease counter
      </button>
    </>
  );
}

export default Counter;

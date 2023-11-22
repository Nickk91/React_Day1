import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const data = ["hello", "world"];
  const string = data.join(" ");
  const number1 = 5;
  const number2 = 6;

  const string2 = "I love React!";

  // The output should be: The string’s length is <display
  // the length of the string>

  return (
    <div>
      <h1>{string} </h1>
      <h1>
        {number1}+{number2}={number1 + number2}{" "}
      </h1>
      <h1>The string's length is {string2.length} </h1>
    </div>
  );
}

export default App;

// Create some JSX from the following variables:
// 1. const data = ["hello", "world"];
// the output should be: “Hello World” notice the spacing!
// 2. const number1 = 5;
// const number2 =6;
// The output should be: 5 + 6 = 11
// 3. const string = "I love React!"
// The output should be: The string’s length is <display
// the length of the string>

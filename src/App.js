/*
import './App.css';
import Accordian from './components/accordian';


const person = {
  name: "John",
  age: 25,
  isMarried: false,
}

const person2 = {...person, name: "Peter"};

const names = ["John", "Peter", "Jane"];
const newNames = [...names, "Doe"];


console.log(person);
console.log(person2);
console.log(names);
console.log(newNames);
function App() {
  return (
    <div className="App">
      <Accordian />
    </div>
  );
}

export default App;
*/

import React from "react";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import Message from "./components/Message";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import Cat from "./Cats/Cat";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";

function App() {
  return (
    <>
    {/* <Message />
      <FunctionClick />
      <ClassClick /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <Cat /> */}
      {/* <HookCounterThree /> */}
      <HookCounterFour />
    </>
  );
}

export default App;

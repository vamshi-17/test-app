import React, { useState } from "react";
import { breeds } from "./breeds";
import { colors } from "./colors";

function Cat() {
  const [breed, setBreed] = useState([0]);
  const [color, setColor] = useState("");

  const [cats, setCats] = useState([{ breed: "Siamese", color: "blue" }]);

  const makeChange = () => {
    setCats((prev) => {
      prev[0].color = "red";
      return prev;
    })
  }

  const testChange = () => {
    console.log(cats)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCats((prev) => [...prev, {breed, color}])
    setBreed(breeds[0])
    setColor("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="breed">Cat breed:</label>
        <select
          name="breed"
          id="breed"
          onChange={(e) => setBreed(e.target.value)}
          value={breed}
        >
          {breeds.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
        <br />
        <br />
        <label for="color">Cat color: </label>
        <select 
          name="color"
          id="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        >
          {colors.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>

        {/* <label>
          Cat color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label> */}
        <br />
        <br />
        <input type="submit" title="Save Cat" />
      </form>
      <button onClick={makeChange}>make change</button>
      <button onClick={testChange}>test change</button>
      <br />
      <br />

      <h2>Cat List:</h2>
      {cats.map((el, index) => (
        <p key={index}>
          <span>{el.color} </span>
          <span>{el.breed}</span>
        </p>
      ))}
    </div>
  );
}

export default Cat;

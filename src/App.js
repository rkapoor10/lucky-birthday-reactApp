import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [dobInput, setDobInput] = useState([]);
  const [luckyNoInput, setLuckyNoInput] = useState(0);
  const [output, setOutput] = useState("");

  function onClickHandler() {
    const dobArray = dobInput.split("-");
    if (dobArray[0] >= 2021) {
      setOutput(
        <>
          <div>Birthday's can only be celebrated after you are born</div>
        </>
      );
    } else {
      let sum = 0;
      dobArray.map((element) => {
        sum = sum + Number(element);
        return sum;
      });
      let luck = 0;
      luck = sum % Number(luckyNoInput);
      console.log(luck);
      if (luck === 0) {
        setOutput(<div>You are a lucky person</div>);
      } else {
        setOutput(
          <div>
            But remember "Luck is what happens when preparation meets
            opportunity!"
          </div>
        );
      }
    }
  }

  return (
    <div className="App">
      <h1>Do you think your Birthday is Lucky?</h1>
      {/* scroll down feature to be added */}
      <input
        type="date"
        onChange={(event) => {
          setDobInput(event.target.value);
        }}
      ></input>
      <br />
      <br />
      <label>Enter Your Lucky Number</label>
      <input
        type="Number"
        min="1"
        step="1"
        required
        onChange={(event) => {
          setLuckyNoInput(event.target.value);
        }}
      ></input>
      <br />
      <button onClick={onClickHandler}>Check</button>
      <div>{output}</div>
    </div>
  );
}

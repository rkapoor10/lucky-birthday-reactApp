import React, { useState } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import lucky from "./lotties/lucky.json";
import notLucky from "./lotties/notLucky.json";
import cake from "/src/cake.svg";

export default function App() {
  const [alertBox, setAlertBox] = useState("flex");
  const [dobInput, setDobInput] = useState([]);
  const [mainSection, setMainSection] = useState("block");
  const [luckyNoInput, setLuckyNoInput] = useState(0);
  const [output, setOutput] = useState("");

  const luckyOptions = {
    loop: true,
    autoplay: true,
    animationData: lucky,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const notLuckyOptions = {
    loop: true,
    autoplay: true,
    animationData: notLucky,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function onClickHandler(e) {
    const dobArray = dobInput.split("-");
    if (dobArray[0] >= 9999) {
      setOutput(
        <>
          <div className="box">Enter a valid date of Birth </div>
        </>
      );
    } else {
      setMainSection("none");
      let sum = 0;
      dobArray.map((element) => {
        sum = sum + Number(element);
        return sum;
      });
      console.log(sum);
      let luck = 0;
      luck = sum % Number(luckyNoInput);
      console.log(luck);
      if (luck === 0) {
        setOutput(
          <>
            <div>
              <Lottie options={luckyOptions} height={200} width={200} />
            </div>
            <div className="message">You are a lucky person !</div>
          </>
        );
      } else {
        setOutput(
          <>
            <div>
              <Lottie options={notLuckyOptions} height={200} width={200} />
            </div>
            <div style={{ fontSize: "1.2rem" }}>Not it's Not</div>
            <div style={{ fontSize: "1.2rem" }}>
              <span className="message">
                But Luck is what happens when preparation meets opportunity!
              </span>
              <br /> So, trust your preparation 😊.
            </div>
          </>
        );
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>
          Is Your Birthday <span style={{ fontSize: "3rem" }}>Lucky ?</span>
        </h1>
        <img alt="cake" src={cake} width="100%" height="200px" />

        <a
          onClick={() => {
            setMainSection("block");
            setAlertBox("flex");
            setOutput("");
          }}
          className="clickScroll"
          href="#main"
        >
          {" "}
          click to check{" "}
        </a>
      </div>

      {/* scroll down feature to be added */}
      <div id="main" className="container">
        <div style={{ display: `${mainSection}` }}>
          <h2>Enter the details </h2>
          <div className="box" style={{ display: `${alertBox}` }}>
            <strong>Privacy &nbsp;</strong> We are not storing your DOB
            <div
              onClick={() => {
                setAlertBox("none");
              }}
              style={{
                cursor: "pointer",
                paddingLeft: "1.7rem",
                fontSize: "0.7rem"
              }}
            >
              <span role="img" aria-labelledby="crossIcon">
                ❌
              </span>
            </div>
          </div>

          <label>Date of Birth</label>
          <input
            className="inputBox"
            type="date"
            required
            onChange={(event) => {
              setDobInput(event.target.value);
            }}
          ></input>

          <label>Your Lucky Number</label>
          <input
            className="inputBox"
            type="Number"
            min="1"
            step="1"
            required
            onChange={(event) => {
              setLuckyNoInput(event.target.value);
            }}
          ></input>

          <button onClick={onClickHandler}>Check</button>
        </div>
        <div>{output}</div>

        <footer>
          <hr />
          <ul>
            <li>
              <a
                target="_blank"
                href="https://github.com/rkapoor10/lucky-birthday-reactApp"
              >
                Github |{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ritik-kapoor-493469196/"
                target="blank"
              >
                Linkedin |{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dev.kapsk/?hl=en"
                target="blank"
              >
                Instagram |{" "}
              </a>
            </li>
            <li>
              <a href="https://ritikportfolio.netlify.app/" target="blank">
                Portfolio{" "}
              </a>
            </li>
          </ul>
          <div>
            {" "}
            © 2021 | dev.kapsk |{" "}
            <u
              style={{
                cursor: "pointer"
              }}
              onClick={() => {
                setAlertBox("flex");
              }}
            >
              Privacy Policy
            </u>
          </div>
        </footer>

        {/* */}
      </div>
    </div>
  );
}

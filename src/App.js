import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

function App() {
  const divide = "\u00f7";
  const add = "\u002b";
  const subtract = "\u2212";
  const multiply = "\u00d7";
  const equals = "\u003d";

  const operators = [add, subtract, multiply, divide];

  const [display, setDisplay] = useState({ value: "" });
  const [result, setResult] = useState({ value: "" });
  const [pocket, setPocket] = useState("");

  const preventMoreDecimalPoints = () => {
    var str = display.value;

    if (str[str.length - 1] !== "." && !pocket.includes(".")) {
      setDisplay({ value: display.value + "." });
    }
  };

  const numberBtnOnClick = (num) => {
    setDisplay({ value: display.value + num });
    setPocket(display.value);
  };

  const operatorBtnOnClick = (symbol) => {

    var str = display.value;
    var lastChar = str[str.length - 1];

    if (
      str.length < 1 &&
      (symbol === multiply || symbol === divide || symbol === add)
    ) {
      symbol = "";
    }

    setDisplay({ value: display.value + symbol });

    if (operators.includes(lastChar)) {
      if (
        str.length === 1 &&
        (symbol === multiply || symbol === divide || symbol === add)
      ) {
        symbol = "";
      }
      setDisplay({ value: str.slice(0, str.length - 1) + symbol });
    }

    setPocket("");
    calculate();
  };

  const calculate = () => {
    var str = display.value;

    try {
      var lastChar = str[str.length - 1];

      if (operators.includes(lastChar)) {
        str = str.slice(0, str.length - 1);
      }
      str = str.split(multiply).join("*");
      str = str.split(divide).join("/");
      str = str.split(add).join("+");
      str = str.split(subtract).join("-");
      setResult({ value: evaluate(str) });
    } catch (error) {
      setResult({ value: "Bad expression" });
    }
  };

  const delOnClick = () => {
    setDisplay({ value: display.value.slice(0, display.value.length - 1) });
  };

  const clearAllOutput = () => {
    setDisplay({ value: "" });
    setResult({ value: "" });
  };

  return (
    <div className="App mx-auto vh-100 d-flex align-items-center" style={{ maxWidth: "411px", }}>
      <div className="inner-app-div">
        <Display display={display} result={result} />
        <ButtonPanel
          clearAllOutput={clearAllOutput}
          calculate={calculate}
          delOnClick={delOnClick}
          operatorBtnOnClick={operatorBtnOnClick}
          numberBtnOnClick={numberBtnOnClick}
          preventMoreDecimalPoints={preventMoreDecimalPoints}
          add={add}
          subtract={subtract}
          multiply={multiply}
          divide={divide}
          equals={equals}
        />
      </div>
    </div>
  );
}

export default App;

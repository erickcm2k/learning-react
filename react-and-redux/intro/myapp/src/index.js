import React from "react";
import ReactDOM from "react-dom";

const buttonText = "Press me!";

function formatAMPM() {
  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}


const App = () => {
  return (
    <div>
      <div style={{ backgroundColor: "blue", color: "white" }}>
        Hello there! It's {formatAMPM()},
      </div>
      <button>{buttonText}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

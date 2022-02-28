import React from "react";
import Child from "./Child";
const Parent = (props) => {
  return (
    <div>
      <h2>Parent</h2>
      <label htmlFor="ParentInput">Parent Input</label>
      <input
        type="text"
        id="ParentInput"
        value={props.name}
        onChange={(e) => props.changeName(e.target.value)}
      />
      <Child name={props.name} changeName={props.changeName} />
    </div>
  );
};

export default Parent;

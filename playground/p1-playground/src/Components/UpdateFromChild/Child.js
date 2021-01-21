import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>Child</h2>
      <label htmlFor="ChildInput">Child Input</label>
      <input
        type="text"
        id="ChildInput"
        value={props.name}
        onChange={(e) => props.changeName(e.target.value)}
      />
    </div>
  );
};

export default Child;

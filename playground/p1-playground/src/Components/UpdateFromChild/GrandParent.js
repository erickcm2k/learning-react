import React from "react";
import Parent from "./Parent";
const GrandParent = () => {
  const [name, setName] = React.useState("Erick");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>GrandParent</h1>
      <label htmlFor="grandParentInput">Grandparent Input</label>
      <input
        id="grandParentInput"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <Parent name={name} changeName={setName} />
    </>
  );
};

export default GrandParent;

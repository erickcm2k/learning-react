import React, { useRef, useState, useEffect } from "react";

const UserefTest = () => {
  const [name, setName] = useState("");
  //   const [renderCount, setRenderCount] = useState(0);

  //   const updateAndRerender = (e) => {
  //     setName(e.target.value);
  //     setRenderCount(renderCount + 1);
  //   };

  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // This way useRef prevents the component to rerender with each update
    renderCount.current = renderCount.current + 1;
  });

  const focus = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };
  const blur = () => {
    console.log(inputRef);
    inputRef.current.blur();
  };

  return (
    <React.Fragment>
      <input
        ref={inputRef}
        type="text"
        placeholder="start typing"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <div>My name is {name}</div>
      <div>I've been rerendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
      <button onClick={blur}>Blur</button>
    </React.Fragment>
  );
};

export default UserefTest;

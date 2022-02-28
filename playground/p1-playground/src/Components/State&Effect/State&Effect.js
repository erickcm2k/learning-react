import React, { useState, useEffect } from "react";
const StateEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      console.log(`You clicked ${count}`);
    }

    printAt10();
    duplicateCount();
  }, [count]); // only re-run on count change

  const printAt10 = () => {
    if (count === 10) {
      alert("Clicked 10 times");
    }
  };
  const duplicateCount = () => {
    if (count === 10) {
      setCount(count * 3);
    }
  };

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>
        You clicked me {count} times!
      </button>
    </div>
  );
};

export default StateEffect;

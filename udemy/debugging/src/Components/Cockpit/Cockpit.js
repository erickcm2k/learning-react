import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    return () => console.log("[Cockpit.js] useEffect cleanup");
  }, [props.persons]);
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => console.log("[Cockpit.js] 2nd useEffect cleanup");
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength >= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength >= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked} ref={toggleBtnRef}>
        Toggle Persons
      </button>
    </div>
  );
};

// export default Cockpit;
export default React.memo(Cockpit);
// React.memo is a good alternative
// to shouldComponentUpdate for
// function based components

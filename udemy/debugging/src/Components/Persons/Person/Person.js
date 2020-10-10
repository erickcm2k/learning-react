import React from "react";
import Auxiliary from "../../../HOC/Auxiliary";
import classes from "./Person.css";

class Person extends React.Component {
  render() {
    console.log("[Person] rendering");
    return (
      // <React.Fragment>
      <Auxiliary>
        <p key="k1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="k2">{this.props.children}</p>
        <input
          key="k3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
      {/* </React.Fragment> */}
    );
  }
}

export default Person;

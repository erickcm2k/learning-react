import React from "react";
import Auxiliary from "../../../HOC/Auxiliary";
import withClass from "../../../HOC/withClass";
import classes from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../Context/auth-context";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // Works with old React
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person] rendering");
    return (
      // <React.Fragment>
      <Auxiliary>
        <AuthContext.Consumer>
          {(context) => {
            context.authenticated ? <p>Aunthenticated</p> : <p>Please log in</p>;
          }}
        </AuthContext.Consumer>

        <p key="k1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="k2">{this.props.children}</p>
        <input
          key="k3"
          // Works with old React.
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
      /* </React.Fragment> */
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);

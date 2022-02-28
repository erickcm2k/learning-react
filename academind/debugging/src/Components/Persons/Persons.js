import React from "react";
import Person from "./Person/Person";

// https://es.reactjs.org/docs/react-component.html#constructor
class Persons extends React.PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  /*
   * If returns false, then
   * componentWillUpdate(), render() and componentDidUpdate()
   * will not be invoked
   */

// Using pure components checks prop by prop is everything is the same
// is incompatible with shouldComponentUpdate 

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  /**
   *
   * Any returnet value will be the third argument
   * 'snapshot' of componentDidUpdate()
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    // return { message: "Msg from getSnapshotBeforeUpdate" };
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;

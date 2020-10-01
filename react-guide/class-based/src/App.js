import React from "react";
import Person from "./Person/Person";
import "./App.css";
class App extends React.Component {
  state = {
    persons: [
      { id: "123", name: "Max", age: 22 },
      { id: "124", name: "Manu", age: 29 },
      { id: "125", name: "Stephanie", age: 26 },
      { id: "126", name: "Erick", age: 20 },
    ],
    showPersons: true,
    otherState: "some other value",
  };

  nameChangerHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    // Updating the array with the new values

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    console.log(persons);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black ",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangerHandler(event, person.id)}
              >
                Racing cars
              </Person>
            );
          })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length > 2) {
      classes.push("red");
    }

    if (this.state.persons.length > 3) {
      classes.push("bold");
    }

    return (

        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={buttonStyle} onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
    );
  }
}

export default App;

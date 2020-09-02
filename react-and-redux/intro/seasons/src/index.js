import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  // Constructor should not initialize anything
  // Fetchs and other methods goes at componentDidMount function.
  // constructor(props) {
  //   super(props);
  // }

  // Equivalent to write a constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    return <div>Location: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

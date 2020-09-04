import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  // Using => functions eliminated the context of 'this'.
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Image Search</label>
          <input
            style={{ marginTop: "10px" }}
            placeholder="Search an image"
            type="text"
            className="field"
            value={this.state.searchTerm}
            // Callback function, do not use parenthesis.
            onChange={(event) =>
              this.setState({ searchTerm: event.target.value })
            }
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;

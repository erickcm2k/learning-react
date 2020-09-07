import React from "react";

class BadgeForm extends React.Component {
  handleInput = (e) => {
    console.log({
      value: e.target.value,
      name: e.target.name,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="firstname"
            ></input>
          </div>
          <button
            onClick={this.handleClick}
            type="button"
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="Yesterdar 3:00 PM"
        comment="Cool info!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        date="Today 6:00 PM"
        comment="Thanks for the support"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        date="Today 5:00 AM"
        comment="Nice post"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

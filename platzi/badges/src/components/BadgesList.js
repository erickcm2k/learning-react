import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <p>
                  {badge.firstName} {badge.lastName}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;

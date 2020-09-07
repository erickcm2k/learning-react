import React from "react";
import NavBar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Richard"
                lastname="Kaufman"
                twitter="sparragus"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm></BadgeForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

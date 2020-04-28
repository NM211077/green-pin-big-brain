import React, { Component } from "react";
import logo from "../assets/icon/logo.svg";
import { Navbar } from "../components";

export class HeaderContainer extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
        <Navbar />
      </div>
    );
  }
}

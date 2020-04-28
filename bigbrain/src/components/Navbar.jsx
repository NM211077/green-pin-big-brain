import React, { Component } from "react";

export function Navbar() {
  return (
    <div className="havbar">
      <ul className="navbar-title">
        <li>Home</li>
        <li>Statistics</li>
        <li>Volonteering</li>
      </ul>
      <div className="enter-login">
        <div className="login">Log in</div>
        <div className="create-login">CREATE ACCOUNT</div>
      </div>
    </div>
  );
}

import React, { Component } from "react";

import styled, { keyframes } from "styled-components";
import { rollOut } from "react-animations";
import flipInX from "react-animations/lib/flip-in-x";

const Roll = styled.div`
  animation: 3s ${keyframes`${flipInX}`};
`;

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

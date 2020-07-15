import React, { Component } from "react";
import logo from "../assets/icon/logo.svg";
import { Navbar } from "../components";
import styled, { keyframes } from "styled-components";
import flipInX from "react-animations/lib/flip-in-x";
import {MainContainer} from "./MainContainer";
//import {connect} from "react-redux";

const Roll = styled.div`
  animation: 2s ${keyframes`${flipInX}`};
`;

export class HeaderContainer extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-title">
            <Roll>
              <div className="logo">
                <img src={logo} />
              </div>
            </Roll>
            <Navbar />
          </div>
        </div>
      </div>
    );
  }
}

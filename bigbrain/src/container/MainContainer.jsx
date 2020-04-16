import React, { Component } from "react";
import { MainMap } from "../components/MainMap/MainMap";
import { ButtonPlus } from "../components/MainMap/Button/ButtonMainPlus";

export class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <MainMap />
        <ButtonPlus />
      </div>
    );
  }
}

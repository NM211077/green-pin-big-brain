import React, { Component } from "react";

import { MapComponent, ButtonPlus } from "../components/index.js";

export class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <MapComponent />
        <ButtonPlus />
      </div>
    );
  }
}

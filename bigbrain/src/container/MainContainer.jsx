import React, { Component } from "react";

import { ButtonPlus } from "../components/Button/ButtonMainPlus";
import { MapContainer } from "./MapContainer";

export class MainContainer extends Component {
  google = "https://api.google.com/some/script.js";

  render() {
    return (
      <div className="main">
        <MapContainer google={this.google} />

<ButtonPlus />
      </div>
    );
  }
}

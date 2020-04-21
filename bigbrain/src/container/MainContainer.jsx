import React, { Component } from "react";

import { ButtonPlus } from "../components/Button/ButtonMainPlus";
import { MyMapComponent } from "./MapContainer";
 
export class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <MyMapComponent />
        {/* <ButtonPlus /> */}
      </div>
    );
  }
}

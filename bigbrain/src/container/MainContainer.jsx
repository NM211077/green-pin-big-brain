import React, { Component } from "react";

import { ButtonPlus } from "../components/Button/ButtonMainPlus";
import { MyMapComponent } from "./MapContainer";

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCynkUuNtj3PZVtBa270xT81U2jP8H3rkk",
// })(MapContainer);

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

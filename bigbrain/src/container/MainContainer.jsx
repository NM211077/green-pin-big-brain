import React, { Component } from "react";
import axios from "axios";

import { MapComponent, ButtonPlus } from "../components/index.js";

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://arcane-eyrie-30848.herokuapp.com";

export class MainContainer extends Component {
  state = {
    pin: [],
    showModal: false,
  };

  componentDidMount() {
    const url = `${API_URL}/api/v1/pin`;
    return axios
      .get(url)
      .then((response) => response.data)
      .then((result) => this.setState({ pin: result }))
      .catch((error) => console.log("error", error));
  }

  render() {
    const pin = this.state.pin;
    console.log(pin);
    return (
      <div className="main">
        <MapComponent pin={pin} />
        <ButtonPlus />
      </div>
    );
  }
}

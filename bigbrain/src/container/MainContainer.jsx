import React, { Component } from "react";
import { MapComponent, ButtonPlus } from "../components/index.js";
import axios from 'axios';
import ReactModal from 'react-modal';

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
    state = {
        pin: [],

    }

    componentDidMount() {
        const url = `${API_URL}/api/v1/pin/`;
        return axios.get(url)
            .then(response => response.data)
            .then(result => {console.log('result',result)
                
                this.setState({pin: result});
            });
    }
    handleModal = () => {
        this.setState({showModal: !this.state.showModal});
    }
  render() {

const {pin} = this.state
      console.log(pin);

    return (
      <div className="main">
        <MapComponent
            pin={pin}
        />

        <ButtonPlus
            onClickBtn = {this.handleModal.bind(this)}
        />
      </div>
    );
  }
}

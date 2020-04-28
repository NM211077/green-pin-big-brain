import React, { Component } from "react";

import { MapComponent, ButtonPlus } from "../components/index.js";
import axios from 'axios';


const API_URL = 'https://arcane-eyrie-30848.herokuapp.com';

export class MainContainer extends Component {
    state = {
        pin: [],
    }

    componentDidMount() {
        const url = `${API_URL}/api/v1/`;
        return axios.get(url)
            .then(response => response.data)
            .then(result => {console.log('result',result)
                
                this.setState({pin: result});
            });
    }

  render() {
      const pin = this.state.pin;
      console.log(pin);
    return (
      <div className="main">
        <MapComponent
            pin={pin}
        />
        <ButtonPlus />
      </div>
    );
  }
}

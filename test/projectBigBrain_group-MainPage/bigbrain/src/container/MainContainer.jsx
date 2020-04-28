import React, {Component} from "react";
import {ButtonPlus} from "../components/Button/ButtonMainPlus";
import {MyMapComponent} from "./MapContainer";
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
            .then(result => {
                this.setState({pin: result});
            });
    }

    render() {
        const pin = this.state.pin;

        return (
            <div className="main">
                <MyMapComponent
                    pin={pin}
                />
                {/* <ButtonPlus /> */}
            </div>
        );
    }
}

import React, { Component } from "react";
import { MapComponent, ButtonPlus } from "../components/index.js";
import axios from 'axios';
import '../components/ModalReport/Modal.css';
import ReportForm from '../components/ModalReport/ReportForm';


const API_URL =
  "https://cors-anywhere.herokuapp.com/https://arcane-eyrie-30848.herokuapp.com";

 export const ClickedContextMarker = React.createContext(null);

export class MainContainer extends Component {

  state = {
    pin: [],
    showModal: false,
    showModal2: false,
    isMarkerShown: false,
    position:[
        {lat: null},
        {lng: null}
]

  };


onMapClick = (e)=> {
    const lat = e.latLng.lat();
    const lng =e.latLng.lng();
    return(
    this.setState({
        position:[
            {lat: lat},
            {lng: lng }
        ],
        isMarkerShown:true
}))
}


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

    };


    toggleModal = () => {console.log('showModal',this.state.showModal,8888);
        this.setState({showModal:!this.state.showModal});
    };

    toggleModalReport = () => {console.log('showModal2',this.state.showModal2,9999);
        this.setState({showModal:false,
                   showModal2:!this.state.showModal2}
        );
    };

    backPrevStep= () => {console.log('back', 7777);
        this.setState({showModal:true,
                      showModal2:false}
        );
    };


  render() {

const {pin,showModal,showModal2, isMarkerShown,position} = this.state;

    return (
      <div className="main">
        <MapComponent
            pin={pin}
            onClickCreateMarker={this.onMapClick.bind(this)}
            isMarkerShown={isMarkerShown}
            position={position}
        />

        <ButtonPlus
            onClickBtn = {this.toggleModal.bind(this)}
        />
          {showModal ? (
              <div className='modalStep'>
                  <p className="modalStepInfo">Please select a place on the map
                  </p>
                  <button
                      className="modal-close"
                      onClick={this.toggleModal.bind(this)}
                  >
                      <p>X</p>
                  </button>
                  <button className= 'nextStep' onClick={this.toggleModalReport.bind(this)}>
                      Continue
                  </button>
              </div>
          ) : null};

          {showModal2 ? (
              <ClickedContextMarker.Provider value = {this.state.position}>
              < ReportForm
                  onCancel ={this.toggleModalReport.bind(this)}
                  onBack = {this.backPrevStep.bind(this)}
              />
              </ClickedContextMarker.Provider>
          ) : null}
      </div>
    );
  }
}

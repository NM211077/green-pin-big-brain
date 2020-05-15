import React, { Component } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import '../components/ModalReport/Modal.css';
import ReportForm from '../components/ModalReport/ReportForm';
import ModalFinish from '../components/ModalReport/ModalFinish';
import InfoModal from '../components/ModalReport/InfoModal';
import { BASE_URL } from "../constans";
import { MapComponent, ButtonPlus } from "../components/index.js";


export const ClickedContextMarker = React.createContext(null);

export class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: [],
            showModal: false,
            showInfoIcon: false,
            categoryId: "",
            showModal2: false,
            showModalFinish:false,
            isMarkerShown: false,
            position:[
                {lat: null},
                {lng: null}
            ]
        };
    }

    componentDidMount() {
        const url = `${BASE_URL}/api/v1/pin/`;
        return axios.get(url).then((response) => {
            this.setState({ pin: response.data });
        });
    }

    handleClickInfoIcon = (elem, categ) => {
        this.setState((prevState) => ({
            showInfoIcon: !prevState.showInfoIcon,
            categoryId: elem,
        }));
    };

    handleModal = () => {
        this.setState({ showModal: !this.state.showModal });
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
    };

    toggleModal = () => {
        this.setState({showModal:!this.state.showModal});
    };

    toggleModalReport = () => {
        this.setState({showModal:false,
            showModal2:!this.state.showModal2}
        );
    };

    backPrevStep= (e) => {
        e.preventDefault();
        this.setState({showModal:true,
            showModal2:false}
        );
    };

    closeReportForm = (e) =>{
        e.preventDefault();
        this.setState({
            showModal2: false,
            showModalFinish: true
        })
    }
    toggleCurrentModal = () => {
        this.setState({
            showModalFinish:!this.state.showModalFinish
        });
    };

    crossToReport=()=>{
        this.setState({
            showModalFinish:false,
            showModal2:true
        })
    };
    render() {
    const {pin, showInfoIcon, categoryId,showModal,showModal2,showModalFinish, isMarkerShown,position} = this.state

    return (
      <div className="main">
        <MapComponent
            pin={pin}
            onClickCreateMarker={this.onMapClick.bind(this)}
            isMarkerShown={isMarkerShown}
            position={position}
            showInfoIcon={showInfoIcon}
            handleClickInfoIcon={this.handleClickInfoIcon}
            categoryId={categoryId}
        />
          <ButtonPlus
              onClickBtn = {this.toggleModal.bind(this)}
          />
          {showModal ? (
              <InfoModal
                  onClick={this.toggleModal.bind(this)}
                  onClose={this.toggleModalReport.bind(this)}
              />
          ) : null};

          {showModal2 ? (
              <ClickedContextMarker.Provider value = {this.state.position}>
                  < ReportForm
                      onCancel ={this.toggleModalReport.bind(this)}
                      onBack = {this.backPrevStep.bind(this)}
                      geo={position}
                      onCloseReportForm = {this.closeReportForm.bind(this)}
                  />
              </ClickedContextMarker.Provider>
          ) : null}

          {showModalFinish ? (
              <ModalFinish
                  onClose={this.toggleCurrentModal.bind(this)}
                  onCrossToReport={this.crossToReport.bind(this)}
              />
          ) : null}
      </div>
    );
  }
}

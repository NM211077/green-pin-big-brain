import React, { Component } from "react";
import axios from "axios";
import ReactModal from "react-modal";


import { MapComponent, ButtonPlus } from "../components/index.js";
import { BASE_URL } from "../constans";

export class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: [],
      showModal: false,
      showInfoIcon: false,
      categoryId: "",
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
  render() {
    const { pin, showInfoIcon, categoryId } = this.state;
    return (
      <div className="main">
        <MapComponent
          pin={pin}
          showInfoIcon={showInfoIcon}
          handleClickInfoIcon={this.handleClickInfoIcon}
          categoryId={categoryId}
        />
        <ButtonPlus onClickBtn={this.handleModal.bind(this)} />
      </div>
    );
  }
}

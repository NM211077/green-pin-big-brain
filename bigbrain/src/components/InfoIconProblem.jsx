import React, { Component } from "react";

import styled, { keyframes } from "styled-components";
import { flipInX } from "react-animations";
import pen from "../assets/icon/pen.svg";
import camera from "../assets/icon/camera.svg";

const Flip = styled.div`
  animation: 0.5s ${keyframes`${flipInX}`};
`;

export class InfoIconProblem extends Component {
  state = {
    infoModal: {},
  };

  componentDidMount() {
    const { categoryId, pin } = this.props;
    const infoModalId = categoryId;
    const infoModal = pin.find((item) => item.category === infoModalId);
    this.setState({ infoModal });
  }

  render() {
    const { img, title, comment } = this.state.infoModal;

    return (
      <div className="icon-info-modal">
        <Flip>
          <div className="container-info">
            <div className="img-info-modal">
              <div className="heading-photo">
                <img src={camera} alt="icon" className="icon" />
                <p>Photo</p>
              </div>
              {img ? (
                <div className="title-img-info-modal">
                  <img src={img} alt="img" />
                </div>
              ) : (
                <p className="error-photo">
                  Фотографии отсутствуют к данной метке.
                </p>
              )}
            </div>
            <div className="description-problem-modal">
              <div className="description-head">
                <span>
                  <img src={pen} alt="" className="icon" />
                </span>
                <h5>Description of the problem</h5>
              </div>
              <div className="description-type-problem">
                <h5>Type:</h5>
                {title ? title.toUpperCase() : ""}
              </div>
              <div className="title-name-problem"></div>
              <p className="note">
                {comment || (
                  <p className="error-photo">
                    Комментарии отсутствуют к данной метке.
                  </p>
                )}
              </p>
            </div>
            <div className="control-modal">
              <button
                className="btn-close-problem-icon"
                onClick={this.props.handleClickInfoIcon}
              >
                Close
              </button>
            </div>
          </div>
        </Flip>
      </div>
    );
  }
}

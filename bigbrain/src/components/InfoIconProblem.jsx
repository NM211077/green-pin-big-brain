import React, {Component} from "react";

import styled, {keyframes} from "styled-components";
import {flipInX} from "react-animations";
import pen from "../assets/icon/pen.svg";
import camera from "../assets/icon/camera.svg";
import PasswordDone from './PasswordDone.js';
import ModalRemove from './ModalRemove.js'

const Flip = styled.div`
  animation: 0.5s ${keyframes`${flipInX}`};
`;

export class InfoIconProblem extends Component {
    state = {
        infoModal: {},
        showModalDone: false,
        showModalRemove:false,
        inputFieldData: {
            pass: {
                val: "",
                error: false
            }
        }
    };

    componentDidMount() {
        const {categoryId, pin} = this.props;
        const infoModalId = categoryId;
        const infoModal = pin.find((item) => item.id === infoModalId);
        this.setState({infoModal});
    }

    inputChange = e => {
        const value = e.target.value;

        this.setState({
            inputFieldData: {
                pass: {
                    val: value.split(" ").join(""),
                    error: false
                }
            }
        });
    };

    removeMarker=e=> {
        e.preventDefault();
        const password = this.state.inputFieldData.pass.val;
        const{removeMarker,categoryId}=this.props;
        const pin = categoryId;
        console.log(pin, password);
        if(password){
        fetch(`https://cors-anywhere.herokuapp.com/https://arcane-eyrie-30848.herokuapp.com/api/v1/pin/${pin}/`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then(response => {
            response.text().then(data => {
                console.log("Successful" + data);
            })
        }).catch((error) => console.log("error", error));
        }else {alert("Корректировка возможна только после введения пароля")}
    }
    doneMareker =(e)=>{
        console.log(3333);
        e.preventDefault();
        this.setState({showModalDone:false,showModalRemove:true})
    }

    onCloseConfirm=(e)=>{
        e.preventDefault();
        this.setState({
            showModalDone:true,showModalRemove:false
        })
    }
    onClosePass =(e)=>{
        e.preventDefault();
        this.setState({
            showModalDone:false
        })
    }
  toggleModalDone = e =>{
        console.log(999);
        e.preventDefault();
        this.setState({showModalDone:true})
    }

    render() {
        const {img, title, comment} = this.state.infoModal;
        const{showModalDone, inputFieldData,showModalRemove} = this.state;
        return (console.log(title),
                <div className="icon-info-modal">
                    <Flip>
                        <div className="container-info">
                            <div className="img-info-modal">
                                <div className="header-modal"><span>Information</span></div>

                                <div className="description-problem-modal">
                                    <div className="description-head">
                                    <span>
                                    <img src={pen} alt="" className="icon"/>
                                    </span>
                                        <h5>Description of the problem</h5>
                                    </div>
                                    <div className="description-type-problem">
                                        <h5>Type: </h5><span>{title ? title.toUpperCase() : ""}</span>
                                    </div>
                                    <div className="title-name-problem">

                                    </div>

                                </div>
                                <div className="heading-photo">
                                    <img src={camera} alt="icon" className="icon"/>
                                    <p>Photo</p>
                                </div>
                                {img ? (
                                    <div className="title-img-info-modal">
                                        <img src={img} alt="img"/>
                                    </div>
                                ) : (
                                    <p className="error-photo">
                                        Фотографии отсутствуют к данной метке.
                                    </p>
                                )}
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
                                    X
                                </button>
                                <button
                                    className="doneMarker"
                                    onClick = {this.toggleModalDone.bind(this)}
                                ><span>DONE</span></button>
                            </div>
                            {showModalDone ? <PasswordDone
                                inputFieldData ={inputFieldData}
                                onChange={this.inputChange.bind(this)}
                                onSubmit={this.doneMareker.bind(this)}
                                onClose ={this.onClosePass.bind(this)}
                            /> :null}
                            {showModalRemove ? <ModalRemove
                                inputFieldData ={inputFieldData}
                                onSubmit={this.removeMarker.bind(this)}
                                onClose ={this.onCloseConfirm.bind(this)}
                            /> :null}
                        </div>
                    </Flip>
                </div>
        );
    }
}

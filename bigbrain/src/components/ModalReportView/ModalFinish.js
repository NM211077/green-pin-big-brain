import React from 'react';
import './Modal.css';
import Container from 'react-bootstrap/Container'

const ModalFinish = (props) => {
    const {onClose, onCrossToReport} = props;
    return (
        <>
            <Container className="modalStep">
                <p className='modalFinishText'>Your request are successfully saved
                </p>
                <button className="modal-close"
                        onClick={onClose}>X
                </button>
                <button className="btnModal-finish"
                        onClick={onCrossToReport}>
                    <p className='modal-finish'>Continue</p>
                </button>
            </Container>
        </>
    )
}

export default ModalFinish;

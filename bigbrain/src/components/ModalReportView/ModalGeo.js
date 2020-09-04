import React, {Component} from 'react';
import './Modal.css';
import Container from 'react-bootstrap/Container'

const ModalGeo = (props) => {
    const {onClose} = props;
    return (
        <>
            <Container className='modalGeo'>
                <p className="modalStepGeo">Please select a place on the big map!!!
                </p>
                <button className="modal-close"
                        onClick={onClose}>x
                </button>
            </Container>
        </>
    )
}

export default ModalGeo;

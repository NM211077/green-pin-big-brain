import React, {Component} from 'react';
import './Modal.css';
import Container from 'react-bootstrap/Container'

const ModalSelect = (props) => {
    const {onClose} = props;
    return (
        <Container className='modalSelect'>
            <p>Please select a type problem!!!
            </p>
            <button className="modal-close"
                    onClick={onClose}>x
            </button>
        </Container>
    )
}

export default ModalSelect;

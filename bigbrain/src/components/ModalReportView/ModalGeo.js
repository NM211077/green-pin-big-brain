import React, {Component} from 'react';
import './Modal.css';
import Container from 'react-bootstrap/Container'

const ModalGeo = (props) => {
    const {onClose} = props;
    return (
        <>
            <div className='modalGeo'>
                <p className="modalStepGeo">Please select a place on the big map!!!
                </p>
                <button className="modal-close"
                        onClick={onClose}>x
                </button>
            </div>
        </>
    )
}

export default ModalGeo;

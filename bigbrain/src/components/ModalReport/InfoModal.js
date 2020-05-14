import React from 'react';
import './Modal.css';

const InfoModal = (props)=>{
    const{onClick, onClose}=props;
    return(
        <div className='modalStep'>
            <p className="modalStepInfo">Please select a place on the map
            </p>
            <button
                className="modal-close"
                onClick ={onClick}
            >
                <p>X</p>
            </button>
            <button className= 'nextStep' onClick={onClose}>
                Continue
            </button>
        </div>
    )
}

export default InfoModal;

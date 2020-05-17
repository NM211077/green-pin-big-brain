import React from 'react';
import './Modal.css';


const ModalFinish = (props) => {
    const {onClose, onCrossToReport} = props;
    return (
        <div className="modalFinish">
            <p className='modalFinishText'>Your request are successfully saved
            </p>
            <button className="modal-close"
                    onClick={onClose}>X
            </button>
            <button className="btnModal-finish"
                    onClick={onCrossToReport}>
                <p className='modal-finish'>Continue</p>
            </button>
        </div>
    )
}

export default ModalFinish;

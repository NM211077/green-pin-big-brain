import React, {Component} from 'react';
import './Modal.css';

class ModalSelect extends Component {
    render() {
        return (
            <div className='modalSelect'>
                <p>Please select a type problem!!!
                </p>
                <button className="modal-close"
                        onClick={this.props.onClose}>x
                </button>
            </div>
        )
    }
}

export default ModalSelect;

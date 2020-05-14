import React, {Component} from 'react';
import './Modal.css';

class ModalGeo extends Component {
    render() {
        return (
            <div className='modalGeo'>
                <p className="modalStepGeo">Please select a place on the big map!!!
                </p>
                <button className="modal-close"
                        onClick={this.props.onClose}>x
                </button>
            </div>
        )
    }
}

export default ModalGeo;

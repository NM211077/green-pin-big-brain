import React, {Component} from 'react';


class ModalRemove extends Component {
    render() {
        return (
            <div className='confirmModalRemove'>
                <button className="btn-modal-close-confirm- status -change"
                        onClick={this.props.onClose}> x
                </button>
                <p className="confirm -status- change">Сonfirm status change
                </p>
                <button className='btn-confirm- status- change'
                        onClick={this.props.onSubmit}
                >
                    <span>Confirm</span>
                </button>

            </div>
        )
    }
}

export default ModalRemove;
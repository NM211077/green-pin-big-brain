import React, {Component} from 'react';


class PasswordDone extends Component {


    render() {
        return (
            <div className="done-pass">
                <h4>To change the status you need to be an authorized user</h4>
                <div>log in /create account</div>{/*make link cross to login / create account when will be page login*/}
                <button className=" btn-close-pass" onClick={this.props.onClose}> X </button>
            </div>
        );
    }}

export default PasswordDone;
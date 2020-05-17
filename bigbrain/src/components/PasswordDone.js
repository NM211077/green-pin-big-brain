import React, {Component} from 'react';
/*import { Form, Input, Label } from "semantic-ui-react";*/

class PasswordDone extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        const { inputFieldData,onChange,onSubmit,onClose } = this.props;
        console.log(inputFieldData);

        return (
            <div className="done-pass">
                <h4>To change the status of a violation (fixed)</h4>
                <h4>Input your password: {inputFieldData["pass"]["val"]}</h4>
                <form className="register-form" type ="submit" onSubmit={onSubmit}>
                        <input
                            className="passInput"
                            type="password"
                            icon="user circle"
                            name="pass"
                            iconPosition="left"
                            placeholder="Enter Password"
                            onChange={onChange}
                            value={inputFieldData.pass.val}
                            error={inputFieldData["pass"]["error"]}
                        />
                        {inputFieldData["pass"]["error"] && (
                            <labelabel basic color="red" pointing>
                                Field can not be empty
                            </labelabel>
                        )}
                    <p><input type="submit" value="Submit" className="btn-submit-pass" /></p>
                </form>
                <button className=" btn-close-pass" onClick={onClose}> X </button>
            </div>
        );
    }}

export default PasswordDone;
import React, {Component, useState, useEffect, Fragment} from "react";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import appStore from "../assets/img/appStore.png";
import Play from "../assets/img/Play.png";
import FrameLogIn from "../assets/img/FrameLogIn.png";
import {Link, Redirect} from "react-router-dom";

export const AutoriztionStatusContext = React.createContext(null);
export function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState("");
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [auth, setAuth] = useState(false);


    function handleSubmit(event) {
        event.preventDefault();
        fetch("https://cors-anywhere.herokuapp.com/https://arcane-eyrie-30848.herokuapp.com/api/v1/rest-auth/login/", {
            method: "POST",
            body: JSON.stringify({
                    "username": 'NatalyMoskalenko',
                    "email": email,
                    "password": password,
                },
            ),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then(response => {
            response.json().then(data => {

                console.log(data, error, email, password);

                if (!data.key) {
                    setError(data.non_field_errors);
                    setAuth(false);
                }else{
                    console.log("Successful" + data);
                    setKey(data);
                    setAuth(true);
                }
            })
        }).catch((error) => {
            console.log("error", error);
        });
    }

        if (auth){ return <Redirect to={'/main'}/>; }

    return (console.log('auth,',auth),
        <div className="log-page">
            <div className="log-in-modal-title">
                <div className="header-login">Member Login</div>
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <FormGroup className="log-email" controlId="email">
                            <FormControl
                                autoFocus
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={e => {
                                    setEmail(e.target.value);
                                    console.log(email);
                                }}
                            />
                        </FormGroup>
                        <FormGroup className="log-password" controlId="password">
                            <FormControl
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </FormGroup>
                        {/*<FormGroup className="checkbox-log" controlId="checkbox">
                            <FormControl
                                autoFocus
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => {
                                    setRememberMe(!rememberMe);
                                    console.log('onchange Remeber me', rememberMe);
                                }}
                            />
                            <FormLabel> Remember me</FormLabel>
                        </FormGroup>*/}
                        <button className="btn-forgot-password">
                            Forgot your password ?
                        </button>
                        {error == '' ? null : <div>
                            <p className='error-login'>Unable to log in with provided credentials.Password or email is
                                incorrect</p>
                        </div>}
                        <div className="login-regulations">
                            <p className="login-regulations-text">By logging in, you agree to our <a href="#1">Terms of
                                Service </a>
                                and <a href="#2"> Privacy Policy</a>
                            </p>
                        </div>
                        <Button className="btn-login" block bsSize="large" type="submit">
                            <span className="login-span-button">Login</span>
                        </Button>

                        <button className="btn-sing_in-link-redirect"><Link to='/SingUp'>
                            Sign In</Link>
                        </button>
                    </form>
                    <p className="qrInfo">We recommend you to download a Green Pin mobile app.</p>
                    <div className="qrCode-zone">
                        <button type="button" className="qrCode"><img src={appStore} alt="qrCodeAppStore" /></button>
                        <button type="button" className="qrCode"><img src={Play} alt="qrCodePlayMarket" /></button>
                    </div>
                </div>
            </div>
            <img src={FrameLogIn} alt="img" className="FrameLogIn"/>
        </div>
    );
}

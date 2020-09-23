import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled, {keyframes} from "styled-components";
import {rollOut} from "react-animations";
import flipInX from "react-animations/lib/flip-in-x";

const Roll = styled.div`
  animation: 3s ${keyframes`${flipInX}`};
`;

export function Navbar() {
    return (
        <div className="havbar">
            <ul className="navbar-title">
                <li><Link className ="linkNav" to='/home'>Home</Link></li>
                <li><Link className ="linkNav" to='/donation'>Crowfunding</Link></li>
                <li>Volonteering</li>

            </ul>
            <div className="enter-login">
                {/*<div className={'donate'}><Link className ="linkNav" to='/donation'>DONATE</Link></div>*/}
                <div className="login"><Link className ="linkNavLogin" to='/login'>
                    Log in</Link></div>
                <div className="create-login">CREATE ACCOUNT</div>
            </div>
        </div>
    );
}

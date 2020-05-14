import React, { Component } from "react";

import FrameLogIn from "../assets/img/FrameLogIn.png";

export function LogInPage() {
  return (
    <div className="log-page">
      <div className="log-in-modal">
        <div className="log-in-modal-title">
          <h4 className="header-login">Member Login</h4>
          <input type="Email" className="log-email" placeholder="Email" />
          <input
            type="Password"
            className="log-password"
            placeholder="Password"
          />
          <button className="btn-login">Log n</button>
          <div className="checkbox-log">
            <input type="checkbox" />
            Remember me
          </div>
          <button className="btn-forgot-password">
            Forgot yout password ?
          </button>
        </div>
        <div className="login-regulations">
          By logging in, you agree to our <a href="#1">Terms of Service</a>
          and <br />
          <a href="#2">Privacy Policy</a>
        </div>
      </div>
      <img src={FrameLogIn} alt="img" className="FrameLogIn" />
    </div>
  );
}

import React  from "react";
import FrameLogIn from "../assets/img/FrameLogIn.png";
import  ProgressBar from "./ProgressBar.js"

export function DonationPage() {
    return(<>
            <div className="donation-page">
                <div className="donation-info">
                    <div className="donate-title"><h2>WE need your support!</h2></div>
                    <div>
                       <ProgressBar />
                    </div>
                    <div className="donate-donated">
                        <div className="donated">1 000 UA donated</div>
                        <div className="donate-goal" >80 000 UA goal</div>
                    </div>
                    {/*<div className="donate-text"><p>TEXT</p></div>
                    <div className="donate-sum">
                        <div className="sum-donation">sum 1</div>
                        <div className="sum-donation">sum 2</div>
                        <div className="sum-donation">sum 3</div>
                        <div className="sum-donation" >sum 4</div>
                    </div>
                    <button className="donate-btn">DONATE NOW </button>*/}
                </div>
                <img src={FrameLogIn} alt="img" className="FrameLogIn"/>
            </div>
        </>
    );
}

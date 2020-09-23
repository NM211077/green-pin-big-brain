import React, {Component, useState, useEffect} from "react";
import FrameLogIn from "../../assets/img/FrameLogIn.png";
import ProgressBar from "./ProgressBar.js"
import axios from "axios/index";
import {BASE_URL} from "../../constans";

//import  Chart from "./Chart.js"

export function DonationPage() {
    const [donateWant, setDonateWant] = useState(0);
    const [donateHave, setDonateHave] = useState(0);

    function getDataDonate() {
        const url = `${BASE_URL}/api/v1/crowdfunding/`;
        const want = [];
        const have = [];
        return axios.get(url).then((response) => {
                response.data.map((el)=>{
                want.push(el.want);
                have.push(el.have);
            });
            let wantSum = want.reduce((a, b) => a + b);
            let haveSum = have.reduce((c, d) => c + d);
            setDonateWant(wantSum);
            setDonateHave(haveSum);
        });
    };


    useEffect(() => {
        getDataDonate();
    }, []);


    return (
        <>
            <div className="donation-page">
                <div className="donation-info">
                    <div className="donate-title"><h2>WE need your support!</h2></div>
                    <div>
                        <ProgressBar/>
                    </div>
                    <div className="donate-donated">
                        <div className="donated">{donateHave} UA donated</div>
                        <div className="donate-goal">{donateWant} UA goal</div>
                    </div>
                    <button className="donate-btn">DONATE</button>
                </div>
                <img src={FrameLogIn} alt="img" className="FrameLogIn"/>
            </div>
        </>
    );
}

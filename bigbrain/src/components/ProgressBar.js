import React from "react";

const ProgressBar = () => {
    const completed = 10;
    const containerStyles = {
        height: 64,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 20,

    }
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        background: "#78B0A0",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,

    }

    /*const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }*/

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                {/* <span style={labelStyles}>{`${completed}%`}</span>*/}
            </div>
        </div>
    );
};

export default ProgressBar;

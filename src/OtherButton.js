import React from 'react';

const OtherButton = ({ symbol }) => {

    const textColor = {
        color: "#333333"
    }
    return (
        <button className="other-btn button border-0 bg-transparent" id={"btn-" + symbol}>
            <h2 className="font-weight-normal p-3 mb-0" style={textColor}>{symbol}</h2>
        </button>
    )
}

export default OtherButton;
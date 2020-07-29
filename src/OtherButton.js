import React from 'react';

const OtherButton = ({ symbol }) => {

    return (
        <button className="other-btn button rounded-circle border-0" id={"btn-" + symbol}>
            <h2 className="font-weight-normal">{symbol}</h2>
        </button>
    )
}

export default OtherButton;
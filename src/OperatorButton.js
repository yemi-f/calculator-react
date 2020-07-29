import React from 'react';

const OperatorButton = ({ operator }) => {

    const textColor = {
        color: "#F2F2F2"
    }
    return (
        <button className="operator-btn button border-0 bg-transparent" >
            <h2 className="font-weight-normal p-3 mb-0" style={textColor}>{operator}</h2>
        </button>
    )
}

export default OperatorButton;
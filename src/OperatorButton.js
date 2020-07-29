import React from 'react';

const OperatorButton = ({ operator }) => {
    return (
        <button className="operator-btn button rounded-circle border-0" >
            <h2 className="font-weight-normal">{operator}</h2>
        </button>
    )
}

export default OperatorButton;
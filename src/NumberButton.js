import React from 'react';


const NumberButton = ({ num }) => {

    return (
        <button className="number-btn button border-0 bg-transparent" id={"btn-" + num}>
            <h2 className="font-weight-normal p-3 mb-0">{num}</h2>
        </button>
    )
}


export default NumberButton;
import React from 'react';


const NumberButton = ({ num }) => {

    return (
        <button className="number-btn button rounded-circle border-0" id={"btn-" + num}>
            <h2 className="font-weight-normal">{num}</h2>
        </button>
    )
}


export default NumberButton;
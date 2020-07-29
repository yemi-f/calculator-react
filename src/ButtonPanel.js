import React from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import OtherButton from './OtherButton';

const ButtonPanel = (props) => {

    return (
        <div className="button-panel mx-auto app-container text-center" style={{ maxWidth: "411px" }}>
            <div className="row mx-auto">
                <div onClick={() => props.clearAllOutput()} className="w-25 other-btn-div"><OtherButton symbol={"C"} /></div>
                <div onClick={() => props.delOnClick()} className="w-50 other-btn-div border-left border-dark" id="btn-0-div"> <OtherButton symbol={"del"} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.divide)} className="w-25 operator-btn-div"> <OperatorButton operator={props.divide} id="divide" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(7)} className="w-25"> <NumberButton num={7} /></div>
                <div onClick={() => props.numberBtnOnClick(8)} className="w-25"> <NumberButton num={8} /></div>
                <div onClick={() => props.numberBtnOnClick(9)} className="w-25"> <NumberButton num={9} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.multiply)} className="w-25 operator-btn-div"> <OperatorButton operator={props.multiply} id="multiply" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(4)} className="w-25"> <NumberButton num={4} /></div>
                <div onClick={() => props.numberBtnOnClick(5)} className="w-25"> <NumberButton num={5} /></div>
                <div onClick={() => props.numberBtnOnClick(6)} className="w-25"> <NumberButton num={6} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.subtract)} className="w-25 operator-btn-div"><OperatorButton operator={props.subtract} id="subtract" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(1)} className="w-25"> <NumberButton num={1} /></div>
                <div onClick={() => props.numberBtnOnClick(2)} className="w-25"><NumberButton num={2} /></div>
                <div onClick={() => props.numberBtnOnClick(3)} className="w-25"> <NumberButton num={3} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.add)} className="w-25 operator-btn-div"><OperatorButton operator={props.add} id="add" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(0)} className="w-50" id="btn-0-div"><NumberButton num={0} /></div>
                <div onClick={() => props.preventMoreDecimalPoints()} className="w-25"> <NumberButton num={"."} /></div>
                <div onClick={() => props.operatorBtnOnClick("")} className="w-25 operator-btn-div"><OperatorButton operator={props.equals} id="equals" /></div>
            </div>
        </div>
    )
}


export default ButtonPanel;
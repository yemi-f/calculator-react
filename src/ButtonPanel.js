import React from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import OtherButton from './OtherButton';

const ButtonPanel = (props) => {

    return (
        <div className="mx-auto app-container" style={{ maxWidth: "320px" }}>
            <div className="row mx-auto">
                <div onClick={() => props.clearAllOutput()} className="col-xs-3"><OtherButton symbol={"C"} /></div>
                <div onClick={() => props.delOnClick()} className="col-xs-6" id="btn-0-div"> <OtherButton symbol={"del"} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.divide)} className="col-xs-3"> <OperatorButton operator={props.divide} id="divide" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(7)} className="col-xs-3"> <NumberButton num={7} /></div>
                <div onClick={() => props.numberBtnOnClick(8)} className="col-xs-3"> <NumberButton num={8} /></div>
                <div onClick={() => props.numberBtnOnClick(9)} className="col-xs-3"> <NumberButton num={9} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.multiply)} className="col-xs-3"> <OperatorButton operator={props.multiply} id="multiply" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(4)} className="col-xs-3"> <NumberButton num={4} /></div>
                <div onClick={() => props.numberBtnOnClick(5)} className="col-xs-3"> <NumberButton num={5} /></div>
                <div onClick={() => props.numberBtnOnClick(6)} className="col-xs-3"> <NumberButton num={6} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.subtract)} className="col-xs-3"><OperatorButton operator={props.subtract} id="subtract" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(1)} className="col-xs-3"> <NumberButton num={1} /></div>
                <div onClick={() => props.numberBtnOnClick(2)} className="col-xs-3"><NumberButton num={2} /></div>
                <div onClick={() => props.numberBtnOnClick(3)} className="col-xs-3"> <NumberButton num={3} /></div>
                <div onClick={() => props.operatorBtnOnClick(props.add)} className="col-xs-3"><OperatorButton operator={props.add} id="add" /></div>
            </div>
            <div className="row mx-auto">
                <div onClick={() => props.numberBtnOnClick(0)} className="col-xs-6" id="btn-0-div"><NumberButton num={0} /></div>
                <div onClick={() => props.preventMoreDecimalPoints()} className="col-xs-3"> <NumberButton num={"."} /></div>
                <div onClick={() => props.operatorBtnOnClick("")} className="col-xs-3"><OperatorButton operator={props.equals} id="equals" /></div>
            </div>
        </div>
    )
}


export default ButtonPanel;
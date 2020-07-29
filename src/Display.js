import React from "react";

const Display = (props) => {
    return (
        <div className="mx-auto app-container">
            <div className="mx-auto">
                <div>
                    <input
                        type="text"
                        readOnly
                        value={props.display.value}
                        className="border-0 h1 font-weight-normal text-right mt-4 w-100"
                        id="display-out"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        readOnly
                        value={props.result.value || ""}
                        className="border-0 h1 font-weight-normal text-right w-100"
                        id="result-out"
                    />
                </div>
            </div>
        </div>
    );
};

export default Display;

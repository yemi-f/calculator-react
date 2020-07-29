import React from "react";

const Display = (props) => {
    return (
        <div className="mx-auto app-container" style={{ maxWidth: "320px" }}>
            <div className="mx-auto">
                <div>
                    <input
                        type="text"
                        readOnly
                        value={props.display.value}
                        className="border-0 h1 font-weight-normal text-right mt-4"
                        id="display-out"
                        style={{ maxWidth: "320px" }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        readOnly
                        value={props.result.value || ""}
                        className="border-0 h1 font-weight-normal text-right"
                        id="result-out"
                        style={{ maxWidth: "320px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Display;

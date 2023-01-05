import React from "react";

export default function Models() {
    const modelsArray = ["X1", "X3", "X4", "X5", "X6", "X7", "2", "3", "4", "5", "7", "8", "Z4", "i4", "i7", "iX", "BMW M"]
    return (
        <div className="models">
            <p>Select a Series</p>
            <div className="models__row">
                {
                    modelsArray.map((model, idx) => {
                        return <div key={idx} className="row__item">{model}</div>
                    })
                }
            </div>
        </div>

    )
}
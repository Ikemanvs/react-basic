import React from "react";

export default function Saludar(props) {
    console.log(props);
    return (
        <div>
            <button onClick={props.saludarFn}>Saludar</button>
        </div>
    )
}
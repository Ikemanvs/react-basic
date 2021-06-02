import React from "react";

export default function Saludar(props) {
    const { userInfo, saludarFn } = props;
    const { nombre } = userInfo;
    return (
        <div>
            <button onClick={() => saludarFn(nombre)}>Saludame</button>
        </div>
    )
}
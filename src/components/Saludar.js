import React from "react";

export default function Saludar(props) {
    const { userInfo, saludarFn } = props;
    const { nombre = "Anonimo", edad = 0 } = userInfo;
    return (
        <div>
            <button onClick={() => saludarFn(nombre, edad)}>Saludame</button>
        </div>
    )
}
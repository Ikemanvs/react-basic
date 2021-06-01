import React from "react";

export default function Saludar(props) {
    const userData = props.userInfo;
    return (
        <div>
            <h2>Hola {userData.nombre}, tienes {userData.edad} años y tu color favorito es el { userData.color } </h2>
        </div>
    )
}
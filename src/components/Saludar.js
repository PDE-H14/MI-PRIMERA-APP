import React from "react";

export default function Saludar (props) {

    const{userInfo, saludarFn} = props;

    // userName = "Anonimo" si llega un valor indefinido, se cambiara por "Anonimo"
    const {userName = "Anonimo", userAge = "--", favoriteColor = "blanco"} = userInfo;

    return (

        <div>
            <button onClick={ () => saludarFn(userName, userAge, favoriteColor)}>
                Saludar
            </button>
        </div>

    );
}
/*
* Hola {props.name} tu edad es de: {props.age}
*/
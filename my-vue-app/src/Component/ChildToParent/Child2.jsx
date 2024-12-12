import React from "react";

function Child2 ({onUserChange}){
    const updateUser =() => {
        onUserChange(newUser);
    };
    return(
        <div>
            <button
             onClick={updateUser}>Aggiorna Dati Utente</button>
        </div>
    );
};
export default Child2;  
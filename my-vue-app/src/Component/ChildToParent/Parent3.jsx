import React, { useState } from "react";
import Child from "./Child";

function Parent3 (){
    const[user, setUser] = useState({name: '', age:0});
    const handleUserChange = (userInfo) => {

    };
    return(
        <div>
            <h1> Nome: {user.nome}, Età: {user.age}</h1>
            <Child onUserChange = {handleUserChange} />
        </div>
    );
};

export default Parent3;
import React, { useState } from "react";
import Child from "./Child";

function Parent(){
    const[message,setMessage] = useState('');

    const HandleMessage = (childMessage) =>{
        setMessage(childMessage);
    };
    return (
        <div>
            <h1> Messaggio dal Child: {message} </h1>
            <Child onMessage={HandleMessage}></Child>
        </div>
    );
};
export default Parent;

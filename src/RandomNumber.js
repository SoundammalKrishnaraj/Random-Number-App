import { useState } from "react";
import "./index.css";

function RandomNumber(){
    var [number,random]=useState(0);

    function randomnumber(){
        random(Math.floor(Math.random()*100)+1)
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={randomnumber}>Generate Random Number</button>
        </div>
    )
}

export default RandomNumber
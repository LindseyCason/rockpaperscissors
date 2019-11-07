import React, { useState } from "react";

const PlayerForm = () =>{
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("");

    const handleOneChange = e =>{
        setPlayerOneName(e.target.value);
        console.log("This is a test", playerOneName);
    }  
    const handleTwoChange = e =>{
        setPlayerTwoName(e.target.value);
        console.log("This is a test", playerTwoName);
    }

    return(
        <>
        <form>
        <input type="text" alt="Player One's Name" placeholder="Player One" value={playerOneName} onChange={handleOneChange} required={true} />
        <input type="text" alt="Player Two's Name" placeholder="Player Two" value={playerTwoName} onChange={handleTwoChange} required={true} />
        </form>
        <div className="players">           
        <h4>PLAYER ONE: {playerOneName}</h4>
        <h4>PLAYER TWO: {playerTwoName}</h4>
        </div> 
        </>

    )

}
export default PlayerForm;
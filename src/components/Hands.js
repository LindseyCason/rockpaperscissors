import React, { useState, useEffect } from "react";

const Hands = () =>{
    const [playerOneHand, setPlayerOneHand] = useState("https://i.ibb.co/ZdXs7j6/rock.png");
    const [playerOneHandName, setPlayerOneHandName] = useState("rock");
    const [playerOneHandID, setPlayerOneHandID] = useState(0);
    const [playerTwoHand, setPlayerTwoHand] = useState("https://i.ibb.co/crb3nJb/paper.png");
    const [playerTwoHandName, setPlayerTwoHandName] = useState("paper");
    const [playerTwoHandID, setPlayerTwoHandID] = useState(1);
    const [winner, setWinner] = useState("GET READY!");


    const handItems = [{name: "rock", url: "https://i.ibb.co/ZdXs7j6/rock.png", id: 0}, {name: "paper", url: "https://i.ibb.co/crb3nJb/paper.png", id: 1} ,{name: "scissors", url: "https://i.ibb.co/WW4j5Ry/580b585b2edbce24c47b2bd2.png", id: 2}];

    const handIndex1 = (handItems) =>{
        let index = Math.floor(Math.random() * (handItems.length));
        setPlayerOneHandName(handItems[index].name)
        setPlayerOneHand(handItems[index].url)
        setPlayerOneHandID(handItems[index].id)
console.log("p1", playerOneHandName);
    };

    const handIndex2 = (handItems) =>{
    let index = Math.floor(Math.random() * (handItems.length));
    setPlayerTwoHandName(handItems[index].name)
    setPlayerTwoHand(handItems[index].url)
    setPlayerTwoHandID(handItems[index].id)
    console.log("p2", playerTwoHandName);
    console.log("p2 next", handItems[index].name)
    };

    
    const clickHandler =()=>{
        handIndex1(handItems);
        handIndex2(handItems);
        console.log ("p1", playerOneHandName, "p2", playerTwoHandName);
        var element = document.getElementById("winner");
        element.classList.add("winnershow");
       
    }


    const winnerName=()=>{

        if(playerOneHandName === playerTwoHandName){
            return setWinner("TRY AGAIN!");
        }else if(playerOneHandName === "rock" && playerTwoHandName === "scissors"){
            return setWinner("PLAYER ONE WINS!");
        }else if(playerOneHandName === "rock" && playerTwoHandName === "paper"){
            return setWinner("PLAYER TWO WINS!");
        }else if(playerOneHandName === "paper" && playerTwoHandName === "rock"){
            return setWinner("PLAYER ONE WINS!");
        }else if (playerOneHandName === "paper" && playerTwoHandName === "scissors"){
            return setWinner("PLAYER TWO WINS!");
        }else if(playerOneHandName === "scissors" && playerTwoHandName === "paper"){
            return setWinner("PLAYER ONE WINS!");
        }else if (playerOneHandName === "scissors" && playerTwoHandName === "rock"){
            return setWinner("PLAYER TWO WINS!");
        }else {
            return setWinner("TRY AGAIN!");
        };
    }
    useEffect(winnerName);

    return(
        <>
    <div className="handContainer">
        <div className="playerOneHand">
            <img src={playerOneHand} id={playerOneHandID} className={playerOneHandName} alt={playerOneHandName} border="0" />
            </div>
        <div className="playerTwoHand">
            <img src={playerTwoHand} id={playerTwoHandID} className={playerTwoHandName} alt={playerTwoHandName} border="0" />
            </div>        
    </div>        
    <button onClick={clickHandler}>GO!</button>

    <div className="winnerhide" id="winner">
        <h3>{winner}</h3>
    </div>
        </>

    );
    

}
export default Hands;
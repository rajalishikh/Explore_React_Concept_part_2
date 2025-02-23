import { useState } from "react";

export default function Team(){
    const[count,setCount]=useState(0)
    function add(){
        const newAdd=count+1;
        setCount(newAdd)
    }
    function remove(){
        const removePlayer=count-1;
        setCount(removePlayer)
    }
    
    return (
        <div style={{border:"2px solid green" }}>
            <p>Player{count} </p>
            <button onClick={add} >Add</button>
            <button onClick={remove} >Remove</button>
        </div>
    )
}
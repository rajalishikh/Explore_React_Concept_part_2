import { useState } from "react";
export default function Counter(){
    const[count,setCount]=useState(0)
    function add(){
        const newAdd=count+1;
        setCount(newAdd)
    }
    // function of decrement
    function decrement(){
        const remove=count-1;
        setCount(remove)
    }
    return(
  <div style={{border:"2px solid yellow"}}>
            <p>Count{count}</p>
            <button onClick={add}>Add</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
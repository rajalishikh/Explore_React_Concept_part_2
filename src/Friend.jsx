import { useEffect, useState } from "react"
import "./App.css"
import Friend2 from "./Friend2"

export default function Friend(){

    const [friend,setFriend]=useState([])
    useEffect(()=>{
        async function Load_friend() {
            const load_data=await fetch("https://jsonplaceholder.typicode.com/users")
            const convert_data=await load_data.json()
            setFriend(convert_data)
            
        }
        Load_friend()
    },[])
    return(
        
        <div className="student">
            <h2>Total Length:{friend.length}</h2>
            {
                friend.map((item)=><Friend2 key={item.id} Friend_details={item}></Friend2>)
            }
            </div>
    )
}
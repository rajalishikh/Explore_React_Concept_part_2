import { useEffect, useState } from "react";

export default function User(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        async function loadData() {
            const load_data=await fetch("https://jsonplaceholder.typicode.com/users")
            const convert_load_data=await load_data.json()
            setUser(convert_load_data)
            console.log(convert_load_data)
            
        }
        loadData()
    },[])
    return(
        <div>
            <p>Length:{user.length}</p>
        </div>
    )
    
}
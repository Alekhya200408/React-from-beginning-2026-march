import { useEffect,useState } from "react";

function usecurrencyinfo(currency) {
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
        
    },[currency]) //we use  currency as a dependencies because when we change the currency it effects
    console.log(data);
    return data
}

export default usecurrencyinfo
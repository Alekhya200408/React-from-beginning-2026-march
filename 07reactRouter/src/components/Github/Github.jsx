import React from 'react'
import { useState } from 'react'
import { use } from 'react'
import { useEffect } from 'react'
import { data } from 'react-router'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Alekhya200408')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='text-center bg-zinc-400 text-white P-4 TEXT-3XL'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Github Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/Alekhya200408')
  return response.json()
}
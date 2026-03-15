"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const loginUser = async ()=>{

 const res = await fetch("http://localhost:5000/api/auth/login",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body:JSON.stringify({email,password})
 })

 const data = await res.json()

 if(data.token){
  localStorage.setItem("token",data.token)
  router.push("/dashboard")
 }else{
  alert("Login failed")
 }

}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white shadow-xl rounded-lg p-8 w-96">

<h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
Login
</h1>

<input
placeholder="Email"
className="border w-full p-3 rounded mb-4 focus:outline-blue-500"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border w-full p-3 rounded mb-5 focus:outline-blue-500"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-blue-500 hover:bg-blue-600 text-white w-full p-3 rounded"
onClick={loginUser}
>
Login
</button>

</div>

</div>

)

}
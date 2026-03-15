"use client"

import { useState } from "react"

export default function Submit(){

const [category,setCategory] = useState("")
const [department,setDepartment] = useState("")
const [location,setLocation] = useState("")
const [severity,setSeverity] = useState("Low")

const submitCase = async()=>{

await fetch("http://localhost:5000/api/cases",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
category,
department,
location,
severity
})
})

alert("Case submitted")

}

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<div className="bg-white shadow-lg rounded-lg p-8 w-96">

<h1 className="text-2xl font-bold mb-6 text-blue-600">
Submit Complaint
</h1>

<input
placeholder="Category"
className="border p-3 rounded w-full mb-4"
onChange={e=>setCategory(e.target.value)}
/>

<input
placeholder="Department"
className="border p-3 rounded w-full mb-4"
onChange={e=>setDepartment(e.target.value)}
/>

<input
placeholder="Location"
className="border p-3 rounded w-full mb-4"
onChange={e=>setLocation(e.target.value)}
/>

<select
className="border p-3 rounded w-full mb-4"
onChange={e=>setSeverity(e.target.value)}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

<button
onClick={submitCase}
className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded w-full"
>

Submit

</button>

</div>

</div>

)

}
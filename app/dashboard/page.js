"use client"

import { useEffect,useState } from "react"

export default function Dashboard(){

const [cases,setCases] = useState([])

useEffect(()=>{
fetch("http://localhost:5000/api/cases")
.then(res=>res.json())
.then(data=>setCases(data))
},[])

const total = cases.length
const resolved = cases.filter(c=>c.status==="Resolved").length

return(

<div className="min-h-screen bg-gray-100 p-10">

<h1 className="text-3xl font-bold mb-8 text-blue-600">
Analytics Dashboard
</h1>

<div className="grid grid-cols-2 gap-6">

<div className="bg-white shadow-lg p-6 rounded-lg text-center">
<p className="text-gray-500">Total Cases</p>
<h2 className="text-3xl font-bold text-blue-500">{total}</h2>
</div>

<div className="bg-white shadow-lg p-6 rounded-lg text-center">
<p className="text-gray-500">Resolved Cases</p>
<h2 className="text-3xl font-bold text-green-500">{resolved}</h2>
</div>

</div>

</div>

)

}
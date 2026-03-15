"use client"

import { useEffect,useState } from "react"

export default function Cases(){

const [cases,setCases] = useState([])

useEffect(()=>{

fetch("http://localhost:5000/api/cases")
.then(res=>res.json())
.then(data=>setCases(data))

},[])

return(

<div className="min-h-screen bg-gray-100 p-10">

<h1 className="text-3xl font-bold mb-6 text-blue-600">
All Cases
</h1>

<div className="bg-white shadow-lg rounded-lg overflow-hidden">

<table className="w-full">

<thead className="bg-blue-500 text-white">

<tr>

<th className="p-3">Tracking ID</th>
<th className="p-3">Status</th>
<th className="p-3">Department</th>

</tr>

</thead>

<tbody>

{cases.map(c=>(
<tr key={c._id} className="text-center border-b">

<td className="p-3">{c.trackingId}</td>
<td className="p-3">{c.status}</td>
<td className="p-3">{c.department}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}
"use client"

import {useEffect,useState} from "react"

export default function Polls(){

const [polls,setPolls]=useState([])

useEffect(()=>{
fetch("http://localhost:5000/polls/all")
.then(res=>res.json())
.then(data=>setPolls(data))
},[])

async function vote(id,index){

await fetch(`http://localhost:5000/polls/vote/${id}`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
optionIndex:index,
user:"demo"
})
})

alert("Vote submitted")

}

return(

<div className="min-h-screen bg-gray-100 p-10">

<h1 className="text-3xl font-bold mb-8 text-blue-600">
Company Polls
</h1>

{polls.map(p=>(
<div key={p._id} className="bg-white shadow-lg rounded-lg p-6 mb-6">

<h2 className="text-lg font-bold mb-4">{p.question}</h2>

<div className="flex gap-3 flex-wrap">

{p.options.map((o,i)=>(
<button
key={i}
onClick={()=>vote(p._id,i)}
className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
>
{o}
</button>
))}

</div>

</div>
))}

</div>

)
}
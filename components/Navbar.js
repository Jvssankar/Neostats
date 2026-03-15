"use client"

import Link from "next/link"

export default function Navbar(){

return(

<div className="flex gap-6 p-4 bg-gray-200">

<Link href="/dashboard">Dashboard</Link>

<Link href="/submit">Submit Case</Link>

<Link href="/cases">Manage Cases</Link>

<Link href="/polls">Polls</Link>

<Link href="/login">Login</Link>

</div>

)

}
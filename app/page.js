import Link from "next/link"

export default function Home(){

return(

<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

<div className="bg-white shadow-lg rounded-lg p-10 w-96 text-center">

<h1 className="text-3xl font-bold mb-3 text-blue-600">
NeoConnect
</h1>

<p className="text-gray-600 mb-6">
Staff Feedback & Complaint System
</p>

<div className="flex flex-col gap-3">

<Link href="/login"
className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
Login
</Link>

<Link href="/dashboard"
className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
Dashboard
</Link>

<Link href="/submit"
className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
Submit Case
</Link>

<Link href="/cases"
className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
Manage Cases
</Link>

<Link href="/polls"
className="bg-gray-700 text-white py-2 rounded hover:bg-gray-800">
Polls
</Link>

</div>

</div>

</div>

)

}
require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

// ROUTES
const authRoutes = require("./routes/auth")
const caseRoutes = require("./routes/cases")
const pollRoutes = require("./routes/polls")

app.use("/api/auth", authRoutes)
app.use("/api/cases", caseRoutes)
app.use("/api/polls", pollRoutes)

app.listen(5000, ()=>{
 console.log("Server running")
})
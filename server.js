const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let students = [
{ id:101, name:"Rahul Sharma", course:"BSc CS"},
{ id:102, name:"Priya Singh", course:"BCA"}
]

app.get("/students",(req,res)=>{
res.json(students)
})

app.post("/students",(req,res)=>{
const student = req.body
students.push(student)
res.json({message:"Student added successfully"})
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})
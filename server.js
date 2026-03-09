const express = require("express")

const app = express()

app.use(express.static("public"))
app.use(express.json())

const questions = require("./neet_questions.json")

app.get("/",(req,res)=>{
res.send("StudyFlow running")
})

app.get("/questions",(req,res)=>{

const subject=req.query.subject

let data=questions[subject] || []

res.json(data.slice(0,20))

})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Server running")
})

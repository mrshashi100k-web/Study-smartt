const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.static("public"))
app.use(express.json())

const usersFile = "users.json"

function loadUsers(){
return JSON.parse(fs.readFileSync(usersFile))
}

function saveUsers(data){
fs.writeFileSync(usersFile,JSON.stringify(data))
}

app.post("/signup",(req,res)=>{

const {username,password} = req.body

let users = loadUsers()

if(users.find(u=>u.username===username)){

return res.json({status:"exists"})

}

users.push({username,password})

saveUsers(users)

res.json({status:"saved"})

})

app.post("/login",(req,res)=>{

const {username,password}=req.body

let users = loadUsers()

const user = users.find(
u=>u.username===username && u.password===password
)

if(user){
res.json({status:"ok"})
}else{
res.json({status:"invalid"})
}

})

const physics = [
"Units & Dimensions",
"Circular Motion",
"Gravitation",
"Thermodynamics"
]

const chemistry = [
"Chemical Bonding",
"Equilibrium",
"Periodic Table",
"Electrochemistry"
]

const biology = [
"Respiration",
"Circulation",
"Plant Diversity",
"Cell Biology"
]

let daily = {}

function today(){
return new Date().toISOString().slice(0,10)
}

function random(arr){
return arr[Math.floor(Math.random()*arr.length)]
}

app.get("/daily",(req,res)=>{

const d = today()

if(!daily[d]){

daily[d] = {
physics: random(physics),
chemistry: random(chemistry),
biology: random(biology)
}

}

res.json(daily[d])

})

app.get("/questions",(req,res)=>{

let qs=[]

for(let i=1;i<=20;i++){

let a = Math.floor(Math.random()*20)
let b = Math.floor(Math.random()*20)

qs.push({

question:`AI Question ${i}: ${a}+${b}=?`,

options:[a+b,a+b+1,a+b+2,a+b-1],

answer:a+b

})

}

res.json(qs)

})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Server running")
})

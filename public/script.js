async function signup(){

let u=document.getElementById("username").value
let p=document.getElementById("password").value

let res=await fetch("/signup",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify({username:u,password:p})

})

let data=await res.json()

if(data.status==="exists"){

alert("Try different username")

}else{

alert("Account created")

}

}

async function login(){

let u=document.getElementById("username").value
let p=document.getElementById("password").value

let res=await fetch("/login",{

method:"POST",

headers:{"Content-Type":"application/json"},

body:JSON.stringify({username:u,password:p})

})

let data=await res.json()

if(data.status==="ok"){

document.getElementById("loginPage").style.display="none"

loadHome()

}else{

alert("Wrong login")

}

}

async function loadHome(){

let res=await fetch("/daily")

let data=await res.json()

document.getElementById("tasks").innerHTML=

`
<div class="card">Physics (${data.physics})</div>
<div class="card">Chemistry (${data.chemistry})</div>
<div class="card">Biology (${data.biology})</div>
`

}

function countdown(){

const target=new Date("May 1, 2026")

const now=new Date()

const diff=target-now

const days=Math.floor(diff/(1000*60*60*24))

document.getElementById("countdown").innerText=

"NEET Countdown: "+days+" days"

}

setInterval(countdown,1000)

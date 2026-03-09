let questions=[]
let index=0
let score=0
let answers=[]

setTimeout(()=>{
document.getElementById("welcome").style.display="none"
document.getElementById("app").style.display="block"
},2000)

document.getElementById("date").innerText=new Date().toLocaleString()

const quotes=[
"Stay consistent",
"Push yourself daily",
"Success needs discipline",
"Dream big"
]

document.getElementById("motivation").innerText=
quotes[Math.floor(Math.random()*quotes.length)]

function show(name){

document.querySelectorAll(".screen").forEach(s=>{
s.style.display="none"
})

document.getElementById(name).style.display="block"

}

async function startQuiz(subject){

const res=await fetch("/questions?subject="+subject)

questions=await res.json()

index=0
score=0
answers=[]

showQuestion()

}

function showQuestion(){

let q=questions[index]

let html=`<h3>${q.question}</h3>`

q.options.forEach(o=>{
html+=`<button onclick="answer('${o}')">${o}</button>`
})

html+=`<br>
<button onclick="prev()">Previous</button>
<button onclick="next()">Next</button>`

document.getElementById("quizBox").innerHTML=html

}

function answer(opt){

answers[index]=opt

if(opt===questions[index].answer){
score++
}

}

function next(){

if(index<19){
index++
showQuestion()
}else{
finish()
}

}

function prev(){

if(index>0){
index--
showQuestion()
}

}

function finish(){

if(score>=18){

document.getElementById(
"tick-"+questions[0].subject
).innerText="✔"

alert("Task Completed")

}else{

alert("Score "+score+"/20 Try Again")

}

analysis()

}

function analysis(){

let html=""

questions.forEach((q,i)=>{

html+=`
<p>${q.question}</p>
<p>Your: ${answers[i]}</p>
<p>Correct: ${q.answer}</p>
<hr>
`

})

document.getElementById("analysisBox").innerHTML=html

}

function saveNote(){

let text=document.getElementById("noteText").value
let file=document.getElementById("imgUpload").files[0]

let div=document.createElement("div")

div.innerHTML="<p>"+text+"</p>"

if(file){

let img=document.createElement("img")

img.src=URL.createObjectURL(file)

img.style.width="100px"

div.appendChild(img)

}

document.getElementById("notesList").appendChild(div)

}

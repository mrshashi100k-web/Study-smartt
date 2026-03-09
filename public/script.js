async function loadTasks(){

 const res = await fetch("/daily");

 const data = await res.json();

 document.getElementById("tasks").innerHTML =

 `
 <p>Physics: ${data.physics}</p>
 <p>Chemistry: ${data.chemistry}</p>
 <p>Biology: ${data.biology}</p>
 `;

}

async function startQuiz(){

 const res = await fetch("/questions");

 const qs = await res.json();

 let html = "";

 qs.forEach((q,i)=>{

 html += `
 <p>${i+1}. ${q.question}</p>
 <button onclick="answer()">A</button>
 <button onclick="answer()">B</button>
 <button onclick="answer()">C</button>
 <button onclick="answer()">D</button>
 `;

 });

 document.getElementById("quiz").innerHTML = html;

}

let score = 0;

function answer(){

 score++;

}

async function finishQuiz(){

 const res = await fetch("/check",{

 method:"POST",

 headers:{"Content-Type":"application/json"},

 body:JSON.stringify({score})

 });

 const data = await res.json();

 if(data.status=="completed"){

 alert("Task Completed");

 }else{

 alert("Try Again");

 }

}

function saveNote(){

 const text = document.getElementById("noteText").value;

 const img = document.getElementById("imageLink").value;

 const li = document.createElement("li");

 li.innerHTML = text + "<br><img src='"+img+"' width='100'>";

 document.getElementById("notes").appendChild(li);

}

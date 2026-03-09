const motivationQuotes = [
"Stay consistent and success will follow",
"Dream big and work daily",
"Small steps lead to big achievements",
"Push yourself every day"
];

setTimeout(()=>{
 document.getElementById("welcome").style.display="none";
 document.getElementById("app").style.display="block";
 showScreen("home");
},2000);

document.getElementById("date").innerText = new Date().toLocaleString();

document.getElementById("motivation").innerText =
 motivationQuotes[Math.floor(Math.random()*motivationQuotes.length)];

function showScreen(name){

 document.querySelectorAll(".screen").forEach(s=>{
  s.style.display="none";
 });

 document.getElementById(name).style.display="block";

}

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

 let html="";

 qs.forEach((q,i)=>{

 html += `<p>${i+1}. ${q.question}</p>`;

 q.options.forEach(o=>{
 html+=`<button>${o}</button>`;
 });

 });

 document.getElementById("quiz").innerHTML = html;

}

function saveNote(){

 const text=document.getElementById("noteText").value;
 const file=document.getElementById("imgUpload").files[0];

 const div=document.createElement("div");

 div.innerHTML="<p>"+text+"</p>";

 if(file){

 const img=document.createElement("img");
 img.src=URL.createObjectURL(file);

 div.appendChild(img);

 }

 document.getElementById("notesList").appendChild(div);

}

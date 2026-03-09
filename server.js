const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json());

const physics = [
"Laws of Motion",
"Work Energy Power",
"Gravitation",
"Thermodynamics"
];

const chemistry = [
"Mole Concept",
"Structure of Atom",
"Chemical Bonding",
"Equilibrium"
];

const biology = [
"Cell: The Unit of Life",
"Biomolecules",
"Photosynthesis",
"Human Reproduction"
];

function random(arr){
 return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/daily", (req,res)=>{

 res.json({
  physics: random(physics),
  chemistry: random(chemistry),
  biology: random(biology)
 });

});

app.get("/questions", (req,res)=>{

 const questions = [];

 for(let i=1;i<=20;i++){

  questions.push({
   question: "Sample Question " + i,
   options: ["A","B","C","D"],
   answer: "A"
  });

 }

 res.json(questions);

});

app.post("/check",(req,res)=>{

 const score = req.body.score;

 if(score >= 18){

  res.json({status:"completed"});

 } else {

  res.json({status:"retry"});

 }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
 console.log("Server running on port " + PORT);
});

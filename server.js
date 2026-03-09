const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json());

const physics = [
"Laws of Motion",
"Work Energy Power",
"Gravitation",
"Thermodynamics",
"Thermal Physics",
"Circular motion",
"Electrostatic",
"Semiconductor",
"Magnetic Effect",
"Emi",
"capacitor",
"Wave Optics",
"Ray Optics",
"Modern Physics",
"Wave Theory",
"Shm",
"Current Electricity",
];

const chemistry = [
"Mole Concept",
"Structure of Atom",
"Chemical Bonding",
"Equilibrium",
"ionic Equilibrium",
"Goc 1",
"Goc 2",
"thermodynamics",
"Periodic Table",
"Chemical Bonding",
"Redox",
"aldehyde",
"Chemical Kinetics",
"D Block",
"P Block",
"Cordination Compund",
"Haloalkene",
"Alcohol",
"biomolecules",
];

const biology = [
"Cell: The Unit of Life",
"Biomolecules",
"Photosynthesis",
"Human Reproduction"
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
"Extra",
];

function random(arr){
 return arr[Math.floor(Math.random()*arr.length)];
}

app.get("/daily",(req,res)=>{

 res.json({
  physics: random(physics),
  chemistry: random(chemistry),
  biology: random(biology)
 });

});

app.get("/questions",(req,res)=>{

 const questions = [];

 for(let i=1;i<=20;i++){

  questions.push({
   question:"Sample Question "+i,
   options:["A","B","C","D"],
   answer:"A"
  });

 }

 res.json(questions);

});

app.post("/check",(req,res)=>{

 const {score} = req.body;

 if(score >= 18){

  res.json({status:"completed"});

 }else{

  res.json({status:"retry"});

 }

});

app.listen(process.env.PORT || 3000);

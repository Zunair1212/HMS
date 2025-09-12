const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser')


const app=express()
app.use (cors());

mongoose
.connect("mongodb+srv://fzunaira902:lySUZXqo2eL9DMK0@cluster0.t2105.mongodb.net/db_Reservation?retryWrites=true&w=majority&appName=Cluster0")
    .then(() =>{
    console.log("MongoDB Connected");
  });

  app.use (bodyParser.json());


  app.listen(5000, ()=> {
    console.log("Server started at http://localhost:5000");
  });

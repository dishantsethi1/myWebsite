// import express from 'express';
// import dotenv from 'dotenv';
const express=require('express');
const dotenv=require('dotenv');
const app=express();

dotenv.config({path:'./config.env'});

const Connection=require('./db/conn.js');



app.use(express.json());

app.use(require('./router/auth'));




const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listenning form ${PORT}`)
})

Connection();
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path:".env"
})









connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
    
    

  })
})
.catch((error)=>{
  console.log("Error in DB connection ",error);
  process.exit(1);
})









/*

import express from "express";
const app= express()


;(async() => {
    // data base se deal krte time try catch
     try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("Error in connection to database");
        throw error
       })

       app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })
     } catch (error){
         console.error("ERROR :" ,error);
         throw error;
     }
})()
*/

 
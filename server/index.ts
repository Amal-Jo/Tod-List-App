import express from "express"
import mongoose from "mongoose"
import todoModel from "./models/TodoModel"
import cors from "cors"

const app=express()
const PORT=3001

//middlewares
//this allow us to get the information from front end in json format
app.use(express.json())
app.use(cors)

mongoose.connect("mongodb+srv://Amal:Password@1234@todocluster.fmbuo.mongodb.net/Todo_Db?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.post("/insert",async(req,res)=>{
    //collecting data
    //const data=req.body.todos
    const descr= req.body.description
    const status=req.body.complete
    const todo=new todoModel({description:descr,complete:status})
  
   // const todo=new ToDo({description:"watch game",complete:true})
    try {
        await todo.save()
        res.send("inserted data")
        
    } catch (error) {
        console.log(error)
        
    }
})
app.get("/read",async(req,res)=>{
    todoModel.find({},(error,result)=>{
        if(error){
            res.send(error)
        }
        res.send(result)
    })
})

app.listen(PORT,()=>{
    console.log("SERVER RUNNING ON PORT:${PORT}")
})
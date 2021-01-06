//import mongoose, { model } from "mongoose"
import { ITodo } from "./todoTypes";
import { model, Schema } from "mongoose"

const TodoSchema:Schema = new Schema({
    description:{
        type:String,
        required:true

    },
    complete:{
        type:Boolean,
        required:true
    }
})
export default model<ITodo>("Todo_collections",TodoSchema);
//const ToDo= model("TodoModel",TodoSchema)
//module.exports=ToDo
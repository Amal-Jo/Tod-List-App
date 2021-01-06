import { Document } from "mongoose"

export interface ITodo extends Document {

  description: string
  complete: boolean
}
import { Document } from "mongoose"

export interface ExperienceType extends Document {
  year : string
  role_Name : string
  link? : string
  deployment : {
    status : boolean,
    message? : string,
    statusColor? : string
  }
  company_Subtitle : string
  description : string
  techUsed : string[]
}
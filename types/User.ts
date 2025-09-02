import { ExperienceType } from "./Experience"
import { Document } from "mongoose"

export interface UserType extends Document {
  name: string
  email: string
  availability?: {
    messsage: string
    color: string
  }
  userlocation: string
  technology_skills: [string]
  experiences: [ExperienceType]
  currently: {
    role: string
    organisation : string
  }
  socials: [
    {
      name: string
      handle: string
      url: string
    }
  ]
}



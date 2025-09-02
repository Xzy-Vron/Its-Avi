import mongoose from "mongoose";
import { ExperienceType } from "@/types/Experience";

const experienceSchema = new mongoose.Schema<ExperienceType>({

  year: {
    type: String,
    required: true,
  },

  role_Name: {
    type: String,
    required: true,
  },

  link: String,

  deployment: {
    status: {
      type: Boolean,
      default: true
    },
    message : {
      type: String,
    },
    statusColor: {
      type: String,
    }
  },

  company_Subtitle: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  techUsed: {
    type: [String],
    required: true,
  },

})

export {experienceSchema};
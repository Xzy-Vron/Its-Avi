import mongoose from "mongoose";
import { UserType } from "@/types/User";
import { experienceSchema } from "./experience.models";

const userSchema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  availability: {
    messsage: String,
    color: String,
  },
  userlocation: {
    type: String,
    required: true,
  },
  technology_skills: {
    type: [String],
    required: true,
  },
  experiences: {
    type: [experienceSchema],
    required: true,
  },
  currently: {
    role: {
      type: String,
      required: true,
    },
    organisation: {
      type: String,
      required: true,
    },
  },
  socials: [
    {
      name: {
        type: String,
        required: true,
      },
      handle: String,
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = (mongoose.models.User as mongoose.Model<UserType>) || mongoose.model<UserType>("User", userSchema);

export default User;
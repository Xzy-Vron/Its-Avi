import { BlogType } from "@/types/Blog";
import mongoose, { mongo } from "mongoose";

const blogSchema = new mongoose.Schema<BlogType>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt : {
    type: Date,
    required: true,
    default: Date.now,
  },
  readTime: {
    type: String,
    required: true,
  },
  photos: [String]
});

const Blog = (mongoose.models.Blog as mongoose.Model<BlogType>) || mongoose.model("Blog", blogSchema);

export default Blog;



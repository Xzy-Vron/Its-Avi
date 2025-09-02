import { Document } from "mongoose"

export interface BlogType extends Document {
  title: string
  subtitle: string
  createdAt: Date
  readTime: string
  content: string
  photos?: [string]
} 
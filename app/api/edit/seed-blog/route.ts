import { NextRequest } from "next/server";
import dbconnect from "@/lib/db-connect";
import Blog from "@/models/blog.model";
import User from "@/models/user.model";
import { Types } from "mongoose";
import { blogInformation } from "./blog-information";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(req: NextRequest) {
  
  if (!SECRET_KEY || req.nextUrl.searchParams.get("key") !== SECRET_KEY) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbconnect();
    
    const user = await User.findOne({ firstName: "Avinash" });
    
    if (!user) return Response.json({ message: "User not found" }, { status: 404 });
    
    const newblog =  new Blog(blogInformation);
    
    (user.blogs as Types.ObjectId[]).push(newblog._id as Types.ObjectId);

    await newblog.save();
    await user.save();

    return Response.json({
      success: true,
      message: "Blogs seeded successfully",
      blogs: await Blog.find(),
    });

  } catch (error) {

    return Response.json({
      success: false,
      message: "Something went wrong while seeding blog",
     }, { status: 500 });
  }
}

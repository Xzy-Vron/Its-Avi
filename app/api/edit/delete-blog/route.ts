import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@/lib/db-connect";
import Blog from "@/models/blog.model";
import User from "@/models/user.model";

const SECRET_KEY = process.env.SECRET_KEY;

export async function DELETE(req: NextRequest) {

  if (!SECRET_KEY || req.nextUrl.searchParams.get("key") !== SECRET_KEY) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbconnect();

    const id = ""; //👉 Enter your blog Id here to delete the blog

    if (!id) return Response.json({ message: "Id not provided" }, { status: 404 });

    await Blog.findByIdAndDelete(id);

    await User.findOneAndUpdate(
      { firstName: "Avinash" },
      { $pull: { blogs: id } },
      { new: true }
    );

    return Response.json({
      message: "Blog deleted successfully",
    });

  } catch (error: any) {

    return Response.json({ error: error.message }, { status: 500 });
  }
}

import dbconnect from "@/lib/db-connect";
import Blog from "@/models/blog.model";
import { NextRequest } from "next/server";
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await context.params;

  await dbconnect();

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return Response.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, message: "Blog found successfully", blog },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Server error", error },
      { status: 500 }
    );
  }
}

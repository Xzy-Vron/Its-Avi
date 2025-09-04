import dbconnect from "@/lib/db-connect";
import Blog from "@/models/blog.model";

export async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {

  await dbconnect();

  const { blogId } = params;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {

      return Response.json({ 
        success: false,
        message: "Blog not found" 
      }, { 
        status: 404 
      });

    } else {

      return Response.json({
        success: true,
        message: "Blog found successfully",
        blog,
      },{
        status: 200
      });
    }
  } catch (error) {

    return Response.json({ 
        success: false,
        message: "Error fetching blog", 
        error
      }, { 
        status: 500 
      });
  }
}
import dbconnect from "@/lib/db-connect";
import Blog from "@/models/blog.model";

export async function GET(req: Request) {
  await dbconnect();

  const referer = req.headers.get("referer");

  if (referer) {
    try {
      const url = new URL(referer);
      const pathname = url.pathname;

      if (pathname === "/") {
        try {
          const blogs = await Blog.find({}, { content: 0 })
            .sort({ createdAt: -1 })
            .limit(4);

          if (!blogs) {
            return Response.json(
              {
                success: false,
                message: "Blogs not found",
              },
              {
                status: 404,
              }
            );
          }

          return Response.json(
            {
              success: true,
              message: "Blogs found successfully for home page",
              blogs,
            },
            {
              status: 200,
            }
          );
        } catch (error) {
          return Response.json(
            {
              success: "false",
              message: "Error fetching blogs for home page",
            },
            {
              status: 500,
            }
          );
        }
      } else if (pathname === "/blogs") {
        try {
          const blogs = await Blog.find({}, { content: 0 }).sort({
            createdAt: -1,
          });

          if (!blogs) {
            return Response.json(
              {
                success: false,
                message: "Blogs not found for blogs page",
              },
              {
                status: 404,
              }
            );
          }

          return Response.json(
            {
              success: true,
              message: "Blogs found successfully for blogs page",
              blogs,
            },
            {
              status: 200,
            }
          );
        } catch (error) {
          return Response.json(
            {
              success: "false",
              message: "Error fetching blogs for home page",
            },
            { status: 500 }
          );
        }
      } else {
        return Response.json(
          {
            success: false,
            message: "pathname did not match",
          },
          {
            status: 404,
          }
        );
      }
    } catch (error) {
      return Response.json({
        success: "false",
        message: "Could not fetch pathname",
      });
    }
  } else {
    return Response.json({
      success: "false",
      message: "Could not fetch referer",
    });
  }
}

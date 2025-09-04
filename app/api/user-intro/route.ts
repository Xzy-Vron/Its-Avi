import User from "@/models/user.model";
import dbconnect from "@/lib/db-connect";

export async function GET() {
  await dbconnect();
  try {
    const user = await User.findOne({ firstName: "Avinash" });

    if (!user) {
      return Response.json({
        success: false,
        message: "User not found",
      });
    }

    const {
      firstName,
      lastName,
      availability,
      userlocation,
      technology_skills,
      currently,
    } = user;

    return Response.json({
      success: true,
      message: "User found successfully",
      intro: {
        name: {
          firstName,
          lastName,
        },
        availability,
        userlocation,
        technology_skills,
        currently,
      },
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Something went wrong while fetching user",
    });
  }
}

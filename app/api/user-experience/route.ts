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

    const sortedExperiences = user.experiences.sort((a, b) => {
      
      if (a.year === "Present") return -1;
      if (b.year === "Present") return 1;

      return Number(b.year) - Number(a.year);
    });

    if (!sortedExperiences) {
      return Response.json({
        success: false,
        message: "Experiences not found",
      });
    }

    return Response.json({
      success: true,
      message: "Experiences found successfully",
      sortedExperiences,
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Something went wrong while fetching user",
    });
  }
}

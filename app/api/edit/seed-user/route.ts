
// ⛔⛔⛔ If you use this api to edit the user then you might lose the references of your Blogs ⛔⛔⛔ 
// This Might affect the Home Page Blog section


import { NextRequest } from "next/server";
import User from "@/models/user.model";
import { userData } from "./user-information";
import dbconnect from "@/lib/db-connect";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(req: NextRequest) {

  if (!SECRET_KEY || req.nextUrl.searchParams.get("key") !== SECRET_KEY) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbconnect();

    User.deleteMany({});

    const newUser = new User(userData);
    await newUser.save();

    return Response.json({ success: true, message: "User seeded" });

  } catch (error) {
    
    return Response.json({ success: false, error });
  }
}

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  debugger;
  const data = await request.json();

  try {
    await connectToDB();
    const newUser = new User(data);

    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new User", { status: 500 });
  }
};

import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newMessage = await Contact.create(body);

    return new Response(
      JSON.stringify({ success: true, data: newMessage }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}

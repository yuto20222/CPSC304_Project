import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${password});
    `;

    return NextResponse.json({ message: "User created successfully." });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user." }, { status: 500 });
  }
}
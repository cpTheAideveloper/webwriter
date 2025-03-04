import { NextRequest, NextResponse } from "next/server";
import { requestChatCompletion } from "@/utils/openai";


export async function POST(req: NextRequest) {
    try {
      const { messages } = await req.json();
      const response = await requestChatCompletion(messages);
      return NextResponse.json({ data: JSON.parse(response) });
    } catch (error) {
      return NextResponse.json({ error: "Error procesando la petición" }, { status: 500 });
    }
  }
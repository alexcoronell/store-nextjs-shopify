import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
})

export const runtime = 'edge'

export async function POST(req: Request) {
    const { messages } = await req.json()

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages
    })

    const stream = OpenAIStream(response)
console.log(stream)
    return new StreamingTextResponse(stream)
}
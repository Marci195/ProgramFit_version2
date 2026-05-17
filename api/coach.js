import OpenAI from "openai";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Nur POST erlaubt" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY fehlt" });
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const question = body?.question || "Hallo Coach";

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "Du bist ein motivierender Fitness-Coach für ein Paar. Ziel: Abnehmen und Muskelaufbau zuhause/im Freien. Gib sichere, rückenfreundliche Hinweise. Ersetze keinen Arzt oder Physiotherapeuten.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    return res.status(200).json({
      answer: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: error.message,
      stack: error.stack,
    });
  }
}

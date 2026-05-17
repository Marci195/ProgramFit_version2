import OpenAI from "openai";

export default async function handler(req, res) {
  // CORS erlauben
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // OPTIONS Anfrage erlauben
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Nur POST erlauben
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Nur POST erlaubt",
    });
  }

  // Prüfen ob API Key vorhanden ist
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "OPENAI_API_KEY fehlt",
    });
  }

  try {
    // OpenAI initialisieren
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Body lesen
    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const question = body?.question || "Hallo Coach";

    // OpenAI Anfrage
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Du bist ein motivierender Fitness-Coach für Paare. Antworte kurz, motivierend und rückenfreundlich.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    // Antwort senden
    return res.status(200).json({
      answer: completion.choices[0].message.content,
    });

 } catch (error) {
  console.error("FULL ERROR:", error);

  return res.status(500).json({
    message: error.message,
    full: JSON.stringify(error, null, 2),
  });
}

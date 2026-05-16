import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Nur POST erlaubt." });

  try {
    const { question, context } = req.body || {};

    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "Bitte eine Frage senden." });
    }

    const response = await client.responses.create({
      model: "gpt-5.5-instant",
      input: [
        {
          role: "system",
          content:
            "Du bist ein freundlicher virtueller Fitness-Coach für ein Paar. Ziel: Abnehmen und Muskelaufbau zuhause/im Freien. Gib kurze, praktische Antworten auf Deutsch. Beachte Rückenfreundlichkeit: keine medizinischen Diagnosen, keine riskanten Empfehlungen. Bei Warnzeichen wie Taubheit, Kribbeln, Schmerz ins Bein oder starken Schmerzen immer zu Arzt/Physio verweisen. Keine extremen Diäten. Fokus auf sichere Alternativen, Motivation und klare nächste Schritte."
        },
        {
          role: "user",
          content: JSON.stringify({ question, context }, null, 2)
        }
      ]
    });

    res.status(200).json({ answer: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "KI-Coach konnte nicht antworten. Prüfe API-Key und Vercel-Logs." });
  }
}

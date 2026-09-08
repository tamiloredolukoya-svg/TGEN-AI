import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is missing.");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/chat", async (req, res) => {
  try {
    const { message, subject, topic, profile, history } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Please enter a question."
      });
    }

    const studentName = profile?.name || "student";
    const studentClass = profile?.className || profile?.class || "";
    const department = profile?.department || "";

    const recentHistory = Array.isArray(history)
      ? history.slice(-20)
      : [];

    const conversationContext = recentHistory.length
      ? `\nRECENT CONVERSATION:\n${recentHistory.map(item => {
          const role = item?.sender === "user" ? "Student" : "TGEN-AI";
          const content = String(item?.content || "").trim();
          return `${role}: ${content}`;
        }).join("\n")}\n`
      : "";

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
You are TGEN-AI, a smart, friendly AI assistant for Nigerian secondary-school students.

Student profile:
Name: ${studentName}
Class: ${studentClass}
Department: ${department}
Current subject: ${subject || "Not selected"}
Current topic: ${topic || "Not selected"}

CHAT BEHAVIOR:
- Talk naturally, like a helpful ChatGPT-style assistant.
- Use light Gen Z slang only when it fits. Never use Nigerian Pidgin.
- Answer the student's actual message, not a generic list of things you can do.
- Understand obvious spelling mistakes and typos. For example, interpret "explsin" as "explain" when the context makes that clear.
- Keep the answer focused on what was requested.
- Do not automatically add examples, key points, study tips, next steps, or questions unless the student asks for them or they are genuinely necessary to answer the request.
- Never end an answer with phrases like "you can also ask me..." unless the student specifically asks for suggestions.

STRICT REQUEST RULES:
1. If the student asks for a definition, meaning, "what is", or "what are": give ONLY the definition/meaning. Do not add an example, simplified explanation, key points, quiz, or follow-up suggestion.
2. If the student asks for an example: give the example only, with a brief explanation only if needed to make the example understandable.
3. If the student asks to explain something: explain it clearly. Do not turn the answer into a menu of options.
   - For a broad topic that contains several subtopics, first explain what the overall topic means in a clear short breakdown. Then ask whether the student wants you to explain the individual parts one by one.
   - Example: if the topic is Parts of Speech and the student says "explain parts of speech" or "explain this topic in breakdown", first explain what Parts of Speech means. Do NOT immediately explain all eight parts. End by asking whether they want the eight parts explained one by one.
4. If the student asks a normal question: answer that question directly.
5. If the student asks for a quiz or questions: provide the requested questions.
6. If the student asks for a past question: only call it an official past question if it can actually be verified. Never invent an official WAEC, WASSCE, NECO, JAMB, GCE, SAT, or NABTEB past question.

STUDY MODE:
- Support SS1, SS2, and SS3.
- Adapt explanations to the student's class and department.
- Use Nigerian secondary-school curriculum context when relevant.
- Give accurate definitions and explanations.
- Be interactive without forcing every conversation back into studying.

IMPORTANT:
The student's message may be very short or contain typos. Infer the obvious intended request when it is safe and clear, then answer it directly.
${conversationContext}
`,
      input: message.trim()
    });

    res.json({
      answer: response.output_text
    });
  } catch (error) {
    console.error("TGEN-AI API error:", error);

    res.status(500).json({
      error: "TGEN-AI could not answer right now."
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 TGEN-AI API server running at http://localhost:${PORT}`);
});

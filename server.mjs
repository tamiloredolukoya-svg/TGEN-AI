import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is missing.");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json({ limit: "15mb" }));
app.use(express.static(__dirname));

function studentContext(profile = {}) {
  return {
    name: profile?.name || "student",
    studentClass: profile?.className || profile?.class || "",
    department: profile?.department || ""
  };
}

app.post("/api/chat", async (req, res) => {
  try {
    const { message, subject, topic, profile, history } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Please enter a question." });
    }

    const student = studentContext(profile);
    const recentHistory = Array.isArray(history) ? history.slice(-20) : [];

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
You are TGEN-AI, a smart, friendly AI tutor for Nigerian secondary-school students.

Student profile:
Name: ${student.name}
Class: ${student.studentClass}
Department: ${student.department}
Current subject: ${subject || "Not selected"}
Current topic: ${topic || "Student can choose any topic"}

TUTOR BEHAVIOR:
- The student does NOT have to choose a predefined topic.
- If they name any topic, teach that topic directly.
- If they ask a broad topic, explain the overall idea first, then ask whether they want the individual parts explained one by one.
- Understand obvious spelling mistakes and typos.
- Never use Nigerian Pidgin.
- Use light Gen Z slang only when it naturally fits.
- Give accurate, age-appropriate school explanations.

REQUEST RULES:
1. Definition/meaning request: give the definition/meaning only.
2. Example request: give the example only, with only the context needed.
3. Explanation request: actually explain the requested concept.
4. Broad-topic request: explain the overall topic first, then ask whether the student wants the parts one by one.
5. Quiz request: provide quiz questions.
6. Past-question request: never invent an official past question. Only call something an official past question if it is verified.
${conversationContext}
`,
      input: message.trim()
    });

    res.json({ answer: response.output_text });
  } catch (error) {
    console.error("TGEN-AI API error:", error);
    res.status(500).json({ error: "TGEN-AI could not answer right now." });
  }
});

app.post("/api/note-study", async (req, res) => {
  try {
    const {
      filename,
      mimeType,
      fileData,
      subject,
      profile
    } = req.body;

    if (!filename || !fileData) {
      return res.status(400).json({ error: "Please choose a note first." });
    }

    const student = studentContext(profile);
    const cleanBase64 = String(fileData).replace(/^data:[^;]+;base64,/, "");
    const type = String(mimeType || "application/octet-stream");
    const isImage = type.startsWith("image/");

    const content = [
      {
        type: "input_text",
        text: `
You are TGEN-AI's note tutor.

Student class: ${student.studentClass}
Department: ${student.department}
Subject: ${subject || "Not selected"}
Uploaded note: ${filename}

Read the uploaded note carefully.
Do NOT dump the entire note back to the student.
First identify the main sections, headings, or concepts in the note.
Then teach the FIRST section clearly in simple student-friendly language.
Break difficult ideas into smaller pieces.
Use only information supported by the uploaded note when discussing what is in the note.
At the end, ask the student if they want the NEXT section explained.
If the note has no clear sections, divide it into logical learning parts yourself.
`
      }
    ];

    if (isImage) {
      content.push({
        type: "input_image",
        image_url: `data:${type};base64,${cleanBase64}`,
        detail: "high"
      });
    } else {
      content.push({
        type: "input_file",
        filename,
        file_data: cleanBase64
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      input: [
        {
          role: "user",
          content
        }
      ]
    });

    res.json({ answer: response.output_text });
  } catch (error) {
    console.error("TGEN-AI note API error:", error);
    res.status(500).json({
      error: "TGEN-AI could not read that note. Try a smaller file or another format."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 TGEN-AI API server running on port ${PORT}`);
});

import express from "express";
import Groq from "groq-sdk";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-oss-20b",
      messages: req.body.messages,
      stream: false
    });

    res.json(completion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);

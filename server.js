import express from "express";
import Groq from "groq-sdk";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
 const body = {
  ...req.body,
  stream: false
  };
const completion = await client.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: req.body.messages
});

res.json(completion);

    
    },
    body: JSON.stringify(body)
  });
  const data = await groqRes.json();
  res.json(data);
});

app.listen(3000);


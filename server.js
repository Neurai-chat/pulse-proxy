import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
 const body = {
  ...req.body,
  stream: false
  };
  const groqRes = await fetch("https://pulse-proxy-3n26.onrender.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify(body)
  });
  const data = await groqRes.json();
  res.json(data);
});

app.listen(3000);


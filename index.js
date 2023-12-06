import express from 'express';
import fetch from 'node-fetch';
import chalk from 'chalk';
import { config } from 'dotenv';
import cors from 'cors';

const app = express();

app.use(cors());

config();

app.use(express.json());

app.get('/', (req, res) => {
  res.json("Welcome to ChatBP API !");
});

app.get('/api/models', async (req, res) => {
    const apiKey = process.env.API_KEY;
    const url = "https://api.openai.com/v1/models";

    try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        });
    
        const data = await response.json();
        res.json(data);
      } catch (error) {
        res.json({ error: error.message });
      }    
});

app.post('/api/chat', async (req, res) => {
  const reqBody = req.body;
  const apiKey = process.env.API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";

  const body = JSON.stringify({
    messages: [{ role: "user", content: reqBody.message }],
    model: "gpt-3.5-turbo",
    temperature: 0.6,
    stream: false,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });

    const data = await response.json();
    console.log("Usage: ", data);
    res.json(data["choices"][0]["message"]["content"]);
  } catch (error) {
    res.json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {    
    const serverUI = `
╔═════════════════════╗
║                     ║
║     ${chalk.bold.green('ChatBP API')}      ║
║                     ║
╚═════════════════════╝
${chalk.bold.green('Running on port')} ${chalk.bold.blue(PORT)}
`;
    console.log(serverUI);
  });


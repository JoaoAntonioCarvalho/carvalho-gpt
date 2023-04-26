const express = require('express');
const app = express();
const cors = require('cors');

const { runBot, connectToOpenai } = require('./runBot.js');

app.use(cors()); // add this line to enable CORS

let port = '5064';
app.get('/', (req, res) => {
  res.status = 200;
  res.send('Servidor rodando perfeitamente');
});

app.get('/generateAnswer', async (req, res) => {
  let prompt = req.query.prompt;
  try {
    let openai = await connectToOpenai();
    let data = await runBot(openai, prompt);
    let usedTokens = data.usedTokens;
    let response = data.response;

    res.send(response);
    res.status = 200;
  } catch (err) {
    res.send("Erro ao gerar resposta: " + err);
    res.status = 500;
  };
});

app.listen(port, () => {
  console.log('servidor rodando na porta ' + port);
});
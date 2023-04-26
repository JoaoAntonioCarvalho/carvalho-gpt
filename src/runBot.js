const { getOpenaiClient } = require('../connectToOpenAI/connect.js');
const { generateChatResponse } = require('../requests/textQuestion.js');
require('dotenv').config()

const connectToOpenai = async function () {
  //connect with your api_key
  const openai = await getOpenaiClient(process.env.OPENAI_KEY);

  return openai
};

const runBot = async function (openai, prompt) {
  return await generateChatResponse(openai, prompt);
};

module.exports = { connectToOpenai, runBot }

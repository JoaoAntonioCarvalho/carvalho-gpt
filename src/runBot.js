const { getOpenaiClient } = require('../connectToOpenAI/connect.js');
const { generateChatResponse } = require('../requests/textQuestion.js');

const openai_key = "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" // your personal openai KEY

const connectToOpenai = async function () {
  //connect with your api_key
  const openai = await getOpenaiClient(openai_key);

  return openai
};

const runBot = async function (openai, prompt) {
  return await generateChatResponse(openai, prompt);
};

module.exports = { connectToOpenai, runBot }
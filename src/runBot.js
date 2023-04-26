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

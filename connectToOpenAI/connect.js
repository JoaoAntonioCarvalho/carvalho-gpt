const { Configuration, OpenAIApi } = require("openai");

const getOpenaiClient = async function (apiKey) {

  //get the api_key - provided by openAi
  const api_key = apiKey;

  //configuring the 'openAiClient'
  const configuration = new Configuration({
    apiKey: api_key,
  });
  const openai = new OpenAIApi(configuration);

  return openai;
};

module.exports = { getOpenaiClient };
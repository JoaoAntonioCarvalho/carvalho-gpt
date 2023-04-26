const generateChatResponse = async function (openai, prompt) {

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000, //1000 tokens = ~750 words ( including question + response )
    temperature: 0.2, // 0.7 => less precision - 0.2 => more precision
  });

  let data = {
    usedTokens: response.data.usage.total_tokens,
    response: response.data.choices[0].text
  };

  return data;
};

module.exports = { generateChatResponse };
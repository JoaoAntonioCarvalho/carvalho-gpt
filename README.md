
# CARVALHO-GPT

Utilizando inteligencia artificial, a aplicacao usa a openai lib para gerar qualquer resposta rapidamente


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/JoaoAntonioCarvalho/carvalho-gpt
```

Entre no diretório do projeto...


Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

Abra o chrome e utilize :)

## Apêndice

Para que seja possível utilizar a lib openai, no site https://platform.openai.com/account/usage, crie sua conta e adquira seus tokens. Você consegue utilizar gratuitamente por 1 mes, tempo que os tokens são gratuitos.

Basicamente 1000 tokens são equivalentes a 750 palavras (incluindo sua pergunta e a resposta do bot), a temperature, configurada no requests/textQuestions.js, quanto mais proximo de 0.7, mais criativa é a resposta, quanto mais proximo de 0.2, mais acertiva é a resposta

## Documentação da API

#### Conecta com openai API

```http
await getOpenaiClient(process.env.OPENAI_KEY);
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `OPENAI_KEY` | `string` | **Obrigatório**. A chave da sua conta openai |



## Autores

- [João Carvalho](https://github.com/JoaoAntonioCarvalho/)
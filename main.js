const { app } = require('./src/server.js');
const { pageApp } = require('./src/pageServer.js');
const apiApp = app;
const app1 = pageApp;

let apiPort = '5064';
let pagePort = 4605;

apiApp.listen(apiPort, () => {
  console.log('api rodando na porta ' + apiPort);
});

pageApp.listen(pagePort, () => {
  console.log(`Site aberto em: http://127.0.0.1:${pagePort}`);
});
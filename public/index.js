let buttonSend = document.getElementById("botao-enviar");
let promptArea = document.getElementById("area-prompt");

let responseArea = document.getElementById("area-resposta");

const sleep = function (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};

buttonSend.addEventListener('click', async () => {
  let prompt = promptArea.value;
  let requestOk = false;

  await fetch("http://127.0.0.1:5064/")
    .then(async (response) => {
      if (response.status == 200) {
        let responseText = await response.text();
        if (responseText != 'Servidor rodando perfeitamente') {
          responseArea.textContent = 'erro => abra o servidor antes';
          return
        };
        requestOk = true;
      } else {
        console.log('Erro ' + response.status);
        requestOk = false;
      }
    })
    .catch(error => {
      console.log("erro no fetch: " + error);
      alert('erro => abra o servidor antes');
      requestOk = false;
    })

  if (requestOk == true) {
    let intervalo = setInterval(async () => {
      responseArea.textContent = 'gerando.';
      await sleep(200);
      responseArea.textContent = 'gerando..';
      await sleep(200);
      responseArea.textContent = 'gerando...';
    }, 500);


    await fetch(`http://127.0.0.1:5064/generateAnswer?prompt="${prompt}"`)
      .then(async (response) => {
        if (response.status == 200) {
          let responseText = await response.text();
          clearInterval(intervalo);
          await sleep(2000);
          responseArea.textContent = responseText;
        }
      })
      .catch((error) => {
        console.log(error);
      })

  };
});
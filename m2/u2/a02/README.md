# 2 - Validação de formulários

A validação de formulários é uma das tarefas mais comuns em aplicações Web. A validação de formulários é importante para
garantir que os dados enviados pelo usuário estão no formato esperado e para evitar que dados inválidos sejam enviados
para o servidor.

## Conteúdo detalhado desta aula

Nesta aula será desenvolvida a habilidade de interagir de forma mais segregada com o HTML e as estratégias de validação
e envio de formulários bem como a compreensão de que o dado pode ser trafegado entre o cliente e o servidor

# Validação

O conceito de validação é muito importante em aplicações Web. A validação do lado cliente é importante para garantir que
a experiência do usuário seja a melhor possível, evitando que o usuário tenha que esperar a resposta do servidor para
saber se os dados que ele digitou estão corretos ou não. A validação do lado servidor é importante para garantir que
dados inválidos não sejam salvos no banco de dados.

## Validação do lado cliente

A validação do lado cliente é feita com JavaScript. O JavaScript é uma linguagem de programação que roda no browser e
permite que o desenvolvedor manipule o HTML e o CSS da página. O JavaScript também permite que o desenvolvedor faça
requisições HTTP para o servidor, o que é muito útil para validar os dados do formulário.

### Validando o formulário

Para validar o formulário, é necessário capturar o evento de submit do formulário e validar os dados. Se os dados
estiverem válidos, o formulário é enviado para o servidor. Se os dados estiverem inválidos, o formulário não é enviado
para o servidor e o usuário é notificado dos erros.

Exemplo de validação de formulário:

```html
<form id="meu-formulario">
  <input type="text" id="nome" name="nome" placeholder="Nome">
  <input type="email" id="email" name="email" placeholder="E-mail">
  <input type="submit" value="Enviar">
</form>
```

```javascript
const form = document.querySelector('#meu-formulario')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  const inputNome = event.target.querySelector('#nome')
  const inputEmail = event.target.querySelector('#email')
  const nome = inputNome.value
  const email = inputEmail.value
  if (nome.length <= 0) {
    alert('Preencha o nome')
    return
  }
  if (email.length <= 0) {
    alert('Preencha o e-mail')
    return
  }
  alert(`Dados de ${nome} (${email}) enviados com sucesso!`)
})
```

## Validação no lado servidor

A validação no lado servidor é feita com JavaScript ou com qualquer outra linguagem de programação. O JavaScript é uma
linguagem de programação que roda no servidor e permite que o desenvolvedor manipule o banco de dados. O JavaScript
também permite que o desenvolvedor faça requisições HTTP para outros servidores, o que é muito útil para consumir
serviços Web.

### Validando os dados

Usando o módulo http do node podemos criar um pequeno servidor web para receber os dados do formulário. Para isso,
precisamos criar um arquivo chamado `server.mjs` com o seguinte conteúdo:

```javascript
import http from 'http'

const server = http.createServer(function (request, response) {})

const port = 3000

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
```

Em seguida podemos melhorar a função usada para criar o servidor e adicionar algumas novas linhas para 
carregar a tela com o formulário
  
```javascript
http.createServer(function (request, response) {
  if (request.method === 'GET') {
    switch (request.url) {
      case '/':
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(`
            <form method="POST" action="/salvar">
              <input type="text" name="nome" placeholder="Nome">
              <input type="email" name="email" placeholder="Email">
              <button type="submit">Enviar</button>
            </form>
        `)
        break
    }
    return
  }

  if (request.method === 'POST') {
    switch (request.url) {
      case '/salvar':
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(`
            <h1>Dados salvos com sucesso!</h1>
        `)
        break
    }
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.end('Rota não encontrada')
})
```

Vamos focar apenas nesta parte aqui agora
  
```javascript
switch (request.url) {
  case '/salvar':
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(`
        <h1>Dados salvos com sucesso!</h1>
    `)
    break
}
```

Para lidar com esta forma precismos ler todo o conteúdo do corpo da requisição e depois transformar em um objeto
JavaScript.
  
```javascript
import { URLSearchParams } from 'url'

let body = '';

request.on('data', (chunk) => {
  body += chunk.toString();
});

request.on('end', () => {
  const formData = new URLSearchParams(body);
  const nome = formData.get('nome');
  const email = formData.get('email');
  const errors = validateForm(nome, email);

  if (errors.length === 0) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Formulário válido!');
  } else {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('Formulário inválido. Erros: ' + errors.join(', '));
  }
```

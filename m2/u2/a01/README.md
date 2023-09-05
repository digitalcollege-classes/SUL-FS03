# 1 - Cliente x Servidor

A comunicação entre cliente e servidor é feita através de requisições HTTP. O cliente faz uma requisição ao servidor e o
servidor responde com uma resposta. Essa comunicação é assíncrona, ou seja, o cliente não precisa esperar a resposta do
servidor para continuar executando o seu código.

## Conteúdo detalhado desta aula

Desenvolver a habilidade de compreender como funciona a comunicação entre um cliente e um servidor usando requisições
assíncronas através de páginas HTML buscando conteúdo do servidor para hidratar a UI do usuário

## Tecnologias

### Promises

Promises são objetos que representam a eventual conclusão ou falha de uma operação assíncrona. Elas são muito úteis
para trabalhar com requisições assíncronas, pois permitem que o código seja executado de forma sequencial, sem a
necessidade de utilizar callbacks.

Exemplo de uso de Promises usando setTimeout:

```javascript
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000)
})
minhaPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));
```

### XHR (XMLHttpRequest)

O XHR é um objeto que permite que o JavaScript realize requisições HTTP. Ele é um objeto nativo do browser e foi
desenvolvido pela Microsoft para o Internet Explorer 5.0. Hoje em dia, todos os browsers modernos implementam o XHR.

Exemplo de requisição com XHR:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/wilcorrea');
xhr.send(null);
```

### Fetch API

A Fetch API é uma API moderna para realizar requisições HTTP. Ela é baseada em Promises e foi desenvolvida para
substituir o XHR.

Exemplo de requisição com Fetch API:

```javascript
fetch('https://api.github.com/users/wilcorrea')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

# Aula 5 - Formulários

### Objetivo

Reconhecer e construir exemplos usando as tags `<form>`, `<input>`(`type="text"`, `type="checkbox"`, `type="radio"`,
`type="password"`), `<textarea>`, `<select>`, `<button>`.

### Conteúdo

#### Formulários

Para criar um formulário, utilizamos a tag `<form>`. Essa tag é utilizada para agrupar os elementos de um formulário, e
possui um atributo `action` que indica para onde os dados do formulário serão enviados, e um atributo `method` que
indica qual o método de envio dos dados.

O método `GET` envia os dados pela URL, enquanto o método `POST` envia os dados no corpo da requisição.

```html

<html lang="pt-br">
<head>
  <title>Formulário</title>
</head>
<body>
  <form
    action="/path"
    method="post"
  >
    ...
  </form>
</body>
</html>
```

#### Campos de texto

Para criar um campo de texto, utilizamos a tag `<input>` com o atributo `type="text"`.

```html
<input type="text" />
```

#### Campos de senha

Para criar um campo de senha, utilizamos a tag `<input>` com o atributo `type="password"`.

```html
<input type="password" />
```

### Materiais

Esta seção é opcional, mas caso queira se aprofundar mais no assunto, você pode consultar os materiais a seguir.

#### Artigos

- [Meu primeiro formulário HTML no MDN](https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Your_first_form)

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

##### O comportamento do button dentro do form

O comportamento padrão do button num `<form>` é o de enviar o formulário. Para alterar esse comportamento, podemos
utilizar o atributo `type` com o valor `button`.

```html
<button type="button">Enviar</button>
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

#### Campos de checkbox

Para criar um campo de checkbox, utilizamos a tag `<input>` com o atributo `type="checkbox"`.

```html
<input type="checkbox" />
```

#### Campos de seleção única

Para criar um campo de seleção única, utilizamos a tag `<input>` com o atributo `type="radio"`.

```html
<input type="radio" />
```

#### Campos de texto longo

Para criar um campo de texto longo, utilizamos a tag `<textarea>`.

```html
<textarea></textarea>
```

#### Propriedades importantes para os campos

##### name

O atributo `name` é utilizado para identificar o campo no formulário. Ele é importante para que o servidor saiba como
identificar os dados que foram enviados.

```html
<input type="text" name="nome" />
```

##### id

O atributo `id` é utilizado para identificar o campo no documento. Ele é importante para que o navegador saiba como
identificar os campos.

```html
<input type="text" id="nome" />
```

##### value

O atributo `value` é utilizado para definir o valor inicial do campo.

```html
<input type="text" value="Valor inicial" />
<input type="checkbox" value="1" />
<textarea cols="30" rows="10">Valor inicial</textarea>
```

#### Atribuir um label a um campo

Para associar um label a um campo, utilizamos o atributo `for` no label, e o atributo `id` no campo.

```html
<label for="nome">Nome</label>
<input type="text" id="nome" />
```

### Sugestões de atividades práticas

Estas sugestões podem ser desenvolvidas em sala de aula para exercitar os conceitos aprendidos neste módulo.

- Crie um arquivo `<username>/fieldset.html` e utilize `<fieldset>` para agrupar os campos do formulário;
- Crie um arquivo `<username>/reset.html` e configure um botão de `reset` para limpar o formulário;
- Crie um arquivo chamado `<username>/validate.html` e implemente validação para um formulário.

### Materiais Adicionais

Esta seção é opcional, mas caso queira se aprofundar mais no assunto, você pode consultar os materiais a seguir.

#### Artigos

- [Meu primeiro formulário HTML no MDN](https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Your_first_form)
- [Tag HTML `<form>` no W3 Docs](https://www.w3docs.com/learn-html/html-form-tag.html)

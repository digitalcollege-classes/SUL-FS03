# Aula 6 - Introdução ao CSS

### Objetivo

Saber como e onde estilos podem ser aplicados (tags `<style>`, link para outros documentos CSS
com `<link rel="stylesheet">` e propriedades `style=""`), reconhecer a sintaxe de atribuição de regras, identificar a
sintaxe da variação dos seletores básicos, apresentar regras e construir exemplos
usando ```color, font, text, background, padding, margin```

### Conteúdo

O CSS é uma linguagem de folhas de estilo criada para estilizar páginas HTML. A sigla **CSS** significa `Cascading Style
Sheets`, que em português significa Folhas de Estilo em Cascata. CSS é uma linguagem que permite estilizar páginas da
web. Com ela é possível alterar a cor do texto, a fonte, o espaçamento entre os parágrafos, o tamanho das colunas e o
layout de sua página. Criada em 1996, desde então vem sendo a principal ferramenta utilizado para estilizar páginas da
web.

#### Sintaxe

A sintaxe do CSS é bem simples, ela é composta por um seletor e um bloco de declaração. O seletor é o elemento HTML que
será estilizado e o bloco de declaração é onde ficam as propriedades e os valores que serão aplicados ao seletor.

```css
selector {
    property: value;
}
```

Todos os elementos de uma página HTML podem ser estilizados com CSS. Para isso, basta selecionar o elemento e aplicar
as propriedades e valores desejados. Por exemplo, para alterar a cor do texto de todos os parágrafos de uma página,
basta
selecionar o elemento `p` e aplicar a propriedade `color` com o valor desejado.

```css
p {
    color: red;
}
```

#### Formas de aplicar CSS

Existem três formas de aplicar CSS em uma página HTML. A primeira é utilizando a tag `<style>`. Essa tag deve ser
colocada dentro da tag `<head>` da página HTML. Dentro da tag `<style>` é possível escrever o código CSS que será
aplicado na página.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de CSS</title>
  <style>
  p {
    color: red;
  }
  </style>
</head>
<body>
  <p>Olá, mundo!</p>
</body>
</html>
```

A segunda forma de aplicar CSS é utilizando a propriedade `style` diretamente no elemento HTML. Essa propriedade recebe
como valor um código CSS. Por exemplo, para alterar a cor do texto de um parágrafo, basta adicionar a propriedade
`style` no elemento `p` e passar como valor a propriedade `color` com o valor desejado.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de CSS</title>
</head>
<body>
  <p style="color: red;">Olá, mundo!</p>
</body>
</html>
```

Já a terceira forma de aplicar CSS é utilizando a tag `<link>` para importar um arquivo CSS externo. Essa tag deve ser
colocada dentro da tag `<head>` da página HTML. O atributo `href` recebe o caminho do arquivo CSS que será importado.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de CSS</title>
  <link
    rel="stylesheet"
    href="style.css"
  >
</head>
<body>
  <p>Olá, mundo!</p>
</body>
</html>
```

### Sugestões de atividades práticas

Estas sugestões podem ser desenvolvidas em sala de aula para exercitar os conceitos aprendidos neste módulo.

- Crie um arquivo `<username>/double.html` e estilize os elementos com CSS dispostos em dois arquivos;
- Faça download deste site [aqui](http://bettermotherfuckingwebsite.com) salve como `<username>/website.html` e
  personalize alguns elementos;
- Crie um arquivo `<username>/simple.html` e recrie em HTML o conteúdo da imagem que está [aqui](examples/simple.jpg);

### Materiais Adicionais

Esta seção é opcional, mas caso queira se aprofundar mais no assunto, você pode consultar os materiais a seguir.

#### Artigos

- [https://developer.mozilla.org/pt-BR/docs/Learn/CSS no MDN](https://developer.mozilla.org/pt-BR/docs/Learn/CSS)

# 8 - Layout e diagramação

### Objetivo

Compreender o uso da propriedade display com os valores ```block, inline, flexbox, grid``` explorando a diagramação
através da tag `<div>`, compreender unidades de medida relativas e absolutas.

### Conteúdo

A propriedade display é uma das mais importantes do CSS, pois ela define como um elemento se comporta em relação aos
outros elementos da página. Ela pode ser usada para definir se um elemento é um bloco ou um elemento inline, mas também
pode ser usada para definir se um elemento é um flex container ou um grid container.

#### Block

O valor block faz com que o elemento seja renderizado como um bloco, ou seja, ele ocupa toda a largura disponível e
sempre começa em uma nova linha. Além disso, ele aceita as propriedades de largura e altura, o que não acontece com
elementos inline.

```css
div, span {
    display: block;
}
```

#### Inline

O valor inline faz com que o elemento seja renderizado como um elemento inline, ou seja, ele não ocupa toda a largura
disponível e não aceita as propriedades de largura e altura.

```css
div, span {
    display: inline;
}
```

#### Flexbox

O valor flex faz com que o elemento seja renderizado como um flex container, ou seja, ele permite que os elementos
filhos sejam organizados em linhas ou colunas, além de permitir que eles sejam alinhados e distribuídos de diversas
formas.

```css
div {
    display: flex;
}
```

```html

<div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

#### Grid

O valor grid faz com que o elemento seja renderizado como um grid container, ou seja, ele permite que os elementos
filhos sejam organizados em linhas e colunas, além de permitir que eles sejam alinhados e distribuídos de diversas
formas.

```css
div {
    display: grid;
}
```

```html

<div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

#### None

O valor none faz com que o elemento não seja renderizado, ou seja, ele não ocupa espaço na página e não é exibido.

```css
div {
    display: none;
}
```

#### Unidades de medida

As unidades de medida são usadas para definir o tamanho de um elemento, seja ele uma largura, uma altura, um espaçamento
ou uma margem. Existem diversas unidades de medida, mas as mais comuns são:

- Pixels (px): É uma unidade de medida absoluta. Um pixel representa um único ponto na tela.

- Porcentagem (%): A porcentagem é uma unidade de medida relativa que se refere a uma proporção em relação a outro
  valor.
  Por exemplo, se um elemento tem largura definida como 50%, ele ocupará metade da largura do seu elemento pai.

- Em (em): É uma unidade de medida relativa em relação ao tamanho da fonte do elemento pai. Por exemplo, se um elemento
  tem tamanho de fonte de 16px e sua largura é definida como 2em, ele terá uma largura de 32px.

- Rem (rem): É uma unidade de medida relativa em relação ao tamanho da fonte do elemento raiz (normalmente o
  elemento <html>). Ao contrário do em, o rem não é afetado pelo tamanho da fonte dos elementos pais.

- Viewport Width (vw): É uma unidade de medida relativa à largura da janela de visualização (viewport). 1vw é igual a 1%
  da largura da janela.

- Viewport Height (vh): É uma unidade de medida relativa à altura da janela de visualização. 1vh é igual a 1% da altura
  da
  janela.

- Viewport Min (vmin) e Viewport Max (vmax): São unidades de medida relativas à menor ou maior dimensão da janela de
  visualização (largura ou altura). Por exemplo, 1vmin é igual a 1% da menor dimensão (largura ou altura) da janela.

- Unidades Absolutas (cm, mm, in, pt, pc): Essas unidades são absolutas e representam medidas físicas reais, como
  centímetros (cm), milímetros (mm), polegadas (in), pontos (pt) e picas (pc). Geralmente são usadas para impressão.

### Sugestões de atividades práticas

Estas sugestões podem ser desenvolvidas em sala de aula para exercitar os conceitos aprendidos neste módulo.

- Crie um arquivo `<username>/flexbox.html` e use flexbox para organizar os elementos em linhas e colunas em um form de
  login;
- Crie um arquivo `<username>/grid.html` e tente fazer um
  formulário [usando este material](https://medium.com/@wilcorrea/seu-navegador-tem-suporte-%C3%A0-grids-e-voc%C3%AA-n%C3%A3o-sabia-4767b7742c79)
  como referência.

### Materiais Adicionais

Esta seção é opcional, mas caso queira se aprofundar mais no assunto, você pode consultar os materiais a seguir.

#### Artigos

- [https://flexboxfroggy.com](https://flexboxfroggy.com/)

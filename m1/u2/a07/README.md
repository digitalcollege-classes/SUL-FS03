# Aula 7 - Composição e hierarquia

### Objetivo

Reconhecer e construir exemplos usando seletores combinados e com diferentes hierarquias, compreender o uso do !
important e a hierarquia natural das regras.

### Conteúdo

Em CSS, os [seletores](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) são utilizados para
selecionar elementos HTML aos quais queremos aplicar estilos. Podemos combinar seletores de diferentes maneiras para
criar regras de estilo mais específicas. A combinação de seletores permite aplicar estilos a elementos com base em suas
características ou posicionamento dentro da árvore de elementos.

#### Hierarquia de Seletores

A hierarquia do CSS (Cascading Style Sheets) é uma parte fundamental do design e da estilização de páginas da web. Ela
define como as regras de estilo são aplicadas aos elementos HTML, permitindo que os desenvolvedores controlem a
aparência e o layout dos seus sites.

No CSS, várias regras de estilo podem ser aplicadas a um mesmo elemento, e é a hierarquia que determina qual regra
prevalecerá em caso de conflito. A hierarquia é baseada em três fatores: tipo de seletor, especificidade e ordem.

#### Tipo e Especificdade de Seletor

O tipo de seletor refere-se ao tipo de regra utilizada para selecionar os elementos HTML. Existem diferentes tipos de
seletores, como seletores de tipo, seletores de classe, seletores de ID, seletores de atributo, entre outros. Cada tipo
de seletor possui um peso diferente na hierarquia. Por exemplo, um seletor de ID tem mais peso do que um seletor de
classe.

A especificidade é outro fator importante na hierarquia do CSS. Ela determina quão específica é uma regra de estilo.
Quanto mais específica for a regra, maior será sua influência sobre o elemento. A especificidade é calculada com base
nos seletores utilizados na regra. Por exemplo, um seletor de ID é mais específico do que um seletor de classe, e um
seletor de classe é mais específico do que um seletor de tipo.

#### Ordem de Definição

Um ponto importante sobre a precedência das regras é a ordem em que as regras são definidas. Quando duas regras têm o
mesmo tipo de seletor e
a mesma especificidade, a última regra definida será a que prevalecerá. Isso significa que a ordem das regras no arquivo
CSS pode ter impacto na aparência do site.

É importante entender a hierarquia do CSS para evitar conflitos e garantir que as regras de estilo sejam aplicadas
corretamente. É recomendado utilizar seletores específicos e evitar o uso excessivo de seletores de ID, pois isso pode
tornar o código CSS mais difícil de ser mantido.

A hierarquia do CSS permite que os desenvolvedores tenham um controle preciso sobre a aparência dos elementos HTML em
seus sites. Ao entender como os seletores são combinados e como a especificidade e a ordem influenciam a aplicação das
regras de estilo, é possível criar estilos consistentes e bem estruturados.

#### Sobre a Especificidade de Seletores

A especificidade de uma regra tem a ver com o quanto ela é específica para um elemento. Quanto mais específica for uma
regra, maior será sua influência sobre o elemento. A especificidade é calculada com base nos seletores utilizados na
regra. Por exemplo, um seletor de ID é mais específico do que um seletor de classe, e um seletor de classe é mais
específico do que um seletor de tipo.

`assets/css/style.css`

```css
.special {
    color: red;
}

p {
    color: blue;
}

#field {
    color: green;
}
```

Pensando em uma página HTML com o código acima, o elemento com o ID `field` terá a cor verde, pois o seletor `#field` é
mais específico do que os outros dois seletores. O elemento com a classe `special` terá a cor vermelha, pois o seletor
`.special` é mais específico do que o seletor `p`. Já os elementos `p` terão a cor azul, pois o seletor `p` é menos
específico do que os outros dois seletores.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de CSS</title>
  <link
    rel="stylesheet"
    href="assets/css/style.css"
  >
</head>
<body>
  <p>Olá, mundo!</p>
  <p class="special">Olá, Brasil!</p>
  <p
    id="field"
    class="special"
  >Olá, Digital College!
  </p>
</body>
</html>
```

##### Ordem Crescente de Especificação

Para ficar mais fácil de entender, podemos pensar na especificidade como uma ordem crescente. Quanto mais específico for
um seletor, maior será sua influência sobre o elemento. A ordem crescente de especificação é a seguinte:

- [Seletores Universais](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors), ex.: `*`
- [Tipo de Seletores](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors), ex.: `p`, `div`, `span`
- [Classes seletoras](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors), ex.: `.special`, `.container`
- [Atributos Seletores](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors),
  ex.: `[type="text"]`, `a[href$=".org" i]`
- [Pseudo-classes e pseudo-elementos](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements),
  ex.: `:hover`, `::before`
- [Seletores ID](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors), ex.: `#field`, `#container`
- [Estilo Inline](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured#inline_styles),
  ex.: `<p style="color: red;">Olá, mundo!</p>`
- [!important](https://developer.mozilla.org/en-US/docs/Web/CSS/important), ex.: `p { color: red !important; }`
- [:not()](https://developer.mozilla.org/en-US/docs/Web/CSS/:not), ex.: `p:not(.special) { color: red; }`

#### Sobre a Combinação de Seletores

Se parecia que não tinha como complicar, agora vamos falar sobre a combinação de seletores. A combinação de seletores
ocorre quando dois ou mais seletores são utilizados na mesma regra. Por exemplo, o seletor `.special` é uma classe
seletora, e o seletor `p` é um tipo de seletor. Quando esses dois seletores são combinados, eles formam um seletor de
classe de tipo, que é mais específico do que um seletor de classe ou um seletor de tipo.

##### Combinadores

Os seletores podem ser combinados utilizando os seguintes combinadores:

- adjacent sibling, ex.: `h2 + p`
- child, ex.: `div > p`
- descendant, ex.: `div p`
- general sibling, ex.: `h2 ~ p`
- selector list, ex.: `h2, p`

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de CSS</title>
  <link
    rel="stylesheet"
    href="assets/css/style.css"
  >
</head>
<body>
  <p>Olá, mundo!</p>
  <p class="special">Olá, Brasil!</p>
  <p
    id="field"
    class="special"
  >
    Olá, Digital College!
  </p>
</body>
```

### Sugestões de atividades práticas

Estas sugestões podem ser desenvolvidas em sala de aula para exercitar os conceitos aprendidos neste módulo.

- Crie um arquivo `<username>/pseudo-class.html` que use a pseudo-class `:hover` para alterar a cor de fundo de um
  elemento HTML;
- Crie um arquivo `<username>/not.html` use um seletor `:not()` para alterar a `mrgin` de um elemento que não possua uma
  classe específica;
- Crie um arquivo `<username>/child.html` o operador `>` para alterar a cor de fundo de um elemento HTML que seja filho
  direto de outro elemento HTML;

### Materiais Adicionais

Esta seção é opcional, mas caso queira se aprofundar mais no assunto, você pode consultar os materiais a seguir.

#### Artigos

- [https://developer.mozilla.org/pt-BR/docs/Learn/CSS no MDN](https://developer.mozilla.org/pt-BR/docs/Learn/CSS)

# 9 - Pseudo-elementos, transições e animações

### Objetivo

Revisar pseudo-classes, identificar e aplicar pseudo-elementos, compreender princípios regras de transformação,
transição e animações.

### Conteúdo

Para complementar a estilização de elementos, o CSS permite que sejam criados pseudo-elementos, que são elementos que
não
existem no HTML, mas que podem ser estilizados como se existissem. Os pseudo-elementos são representados por dois pontos
duplos (::) e são usados para estilizar partes específicas de um elemento.

```css
p::first-line {
    color: red;
}
```

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias asperiores aspernatur
    consequatur cumque cupiditate delectus doloremque doloribus ea earum eius eligendi error esse est eum eveniet
    excepturi exercitationem explicabo facere facilis fugiat fugit hic illum impedit in incidunt ipsa ipsum iure
    laboriosam laborum libero magnam magni maiores maxime molestiae molestias mollitia natus nemo neque nihil nisi nobis
    non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis perspiciatis
  </p>
</body>
</html>
```

### Exemplos de pseudo-elementos

- ::after: cria um pseudo-elemento que é inserido após o elemento selecionado.

- ::before: cria um pseudo-elemento que é inserido antes do elemento selecionado.

- ::cue: especifica a parte do conteúdo de um elemento que é falado por um dispositivo de fala.

- ::first-letter: seleciona a primeira letra de um elemento.

- ::first-line: seleciona a primeira linha de um elemento.

- ::selection: seleciona o conteúdo de um elemento que foi "selecionado" pelo usuário.

### Exemplos de pseudo-classes

- :active: seleciona o elemento ativo. Ex.: um link que está sendo clicado.

- :checked: seleciona um elemento que está marcado. Ex.: um checkbox que está marcado.

- :default: seleciona o elemento padrão. Ex.: um input que está com o valor padrão.

- :dir(): seleciona elementos baseado na direção do texto. Ex.: um elemento que está escrito da direita para a esquerda.

- :disabled: seleciona elementos desabilitados. Ex.: um input que está desabilitado.

- :empty: seleciona elementos que não possuem filhos. Ex.: um elemento que não possui filhos.

- :enabled: seleciona elementos habilitados. Ex.: um input que está habilitado.

- :first: seleciona o primeiro elemento. Ex.: o primeiro elemento de uma lista.

- :first-child: seleciona o primeiro elemento filho. Ex.: o primeiro elemento filho de um elemento.

- :first-of-type: seleciona o primeiro elemento de um tipo. Ex.: o primeiro elemento de um tipo de um elemento.

- :fullscreen: seleciona um elemento que está em modo de tela cheia.

- :focus: seleciona o elemento que está com foco. Ex.: um input que está com foco.

- :hover: seleciona o elemento que está com o mouse em cima. Ex.: um link que está com o mouse em cima.

- :indeterminate: seleciona um elemento que está em um estado indeterminado. Ex.: um checkbox que está em um estado
  indeterminado.

- :in-range: seleciona um elemento que está dentro de um intervalo. Ex.: um input que está dentro de um intervalo.

- :invalid: seleciona um elemento que é inválido. Ex.: um input que é inválido.

- :lang(): seleciona elementos baseado na linguagem. Ex.: um elemento que está em inglês.

- :last-child: seleciona o último elemento filho. Ex.: o último elemento filho de um elemento.

- :last-of-type: seleciona o último elemento de um tipo. Ex.: o último elemento de um tipo de um elemento.

- :left: seleciona elementos que estão à esquerda. Ex.: um elemento que está à esquerda.

- :link: seleciona links não visitados. Ex.: um link que não foi visitado.

- :not(): seleciona elementos que não correspondem ao seletor. Ex.: um elemento que não possui uma classe.

- :nth-child(): seleciona elementos baseado em sua posição. Ex.: o terceiro elemento de uma lista.

- :nth-last-child(): seleciona elementos baseado em sua posição, começando do final. Ex.: o terceiro elemento de uma
  lista, começando do final.

- :nth-last-of-type(): seleciona elementos baseado em sua posição, começando do final, de um tipo. Ex.: o terceiro
  elemento de um tipo de uma lista, começando do final.

- :nth-of-type(): seleciona elementos baseado em sua posição, de um tipo. Ex.: o terceiro elemento de um tipo de uma
  lista.

- :only-child: seleciona elementos que são o único elemento filho. Ex.: um elemento que é o único elemento filho.

- :only-of-type: seleciona elementos que são o único elemento de um tipo. Ex.: um elemento que é o único elemento de um
  tipo.

- :optional: seleciona elementos que não são requeridos. Ex.: um input que não é requerido.

- :out-of-range: seleciona elementos que estão fora de um intervalo. Ex.: um input que está fora de um intervalo.

- :read-only: seleciona elementos que podem ser lidos. Ex.: um input que pode ser lido.

- :read-write: seleciona elementos que podem ser lidos e escritos. Ex.: um input que pode ser lido e escrito.

- :required: seleciona elementos que são requeridos. Ex.: um input que é requerido.

- :right: seleciona elementos que estão à direita. Ex.: um elemento que está à direita.

- :root: seleciona o elemento raiz. Ex.: o elemento raiz de um documento.

- :scope: seleciona elementos que são filhos do elemento raiz. Ex.: um elemento que é filho do elemento raiz.

- :target: seleciona o elemento que é o alvo da URL. Ex.: um elemento que é o alvo da URL.

- :valid: seleciona elementos que são válidos. Ex.: um input que é válido.

> Destaque para `:checked`, `:disabled`, `:enabled`, `:focus`, `:hover`, `:invalid`, `:valid`, `:required` e `:optional`
> que são as que mais vejo sendo utilizadas.

### Transform

A propriedade `transform` permite que você rotacione, escale, mova ou incline um elemento. Ela não afeta o layout do
documento (o espaço reservado para um elemento não é afetado pelas transformações), mas afeta o espaço ocupado pelo
elemento.

```css
.transform {
  transform: rotate(30deg);
}
```

#### Funções de transformação

- matrix(): define uma transformação 2D usando uma matriz de seis valores. Ex.: matrix(1, 0, 0, 1, 0, 0).

- matrix3d(): define uma transformação 3D usando uma matriz de 16 valores. Ex.: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1).

- perspective(): define a perspectiva para visualização 3D. Ex.: perspective(100px).

- rotate(): rotaciona um elemento em graus. Ex.: rotate(30deg).

- rotate3d(): rotaciona um elemento em graus em torno de um eixo. Ex.: rotate3d(1, 1, 0, 30deg).

- rotateX(): rotaciona um elemento em graus em torno do eixo X. Ex.: rotateX(30deg).

- rotateY(): rotaciona um elemento em graus em torno do eixo Y. Ex.: rotateY(30deg).

- rotateZ(): rotaciona um elemento em graus em torno do eixo Z. Ex.: rotateZ(30deg).

- scale(): aumenta ou diminui o tamanho de um elemento. Ex.: scale(2, 4).

- scale3d(): aumenta ou diminui o tamanho de um elemento em 3D. Ex.: scale3d(2, 4, 1).

- scaleX(): aumenta ou diminui o tamanho de um elemento na horizontal. Ex.: scaleX(2).

- scaleY(): aumenta ou diminui o tamanho de um elemento na vertical. Ex.: scaleY(2).

- scaleZ(): aumenta ou diminui o tamanho de um elemento na profundidade. Ex.: scaleZ(2).

- skew(): inclina um elemento em graus. Ex.: skew(30deg, 20deg).

- skewX(): inclina um elemento em graus na horizontal. Ex.: skewX(30deg).

- skewY(): inclina um elemento em graus na vertical. Ex.: skewY(30deg).

- translate(): move um elemento em relação às suas coordenadas atuais. Ex.: translate(100px, 100px).

- translate3d(): move um elemento em relação às suas coordenadas atuais em 3D. Ex.: translate3d(100px, 100px, 100px).

- translateX(): move um elemento em relação às suas coordenadas atuais na horizontal. Ex.: translateX(100px).

- translateY(): move um elemento em relação às suas coordenadas atuais na vertical. Ex.: translateY(100px).

- translateZ(): move um elemento em relação às suas coordenadas atuais na profundidade. Ex.: translateZ(100px).

### Transition

A propriedade `transition` permite que você altere os valores de propriedade de um elemento de forma animada. Você pode
alterar os valores de várias propriedades em uma única declaração.

```css
.transition {
  transition: width 2s, height 2s, transform 2s;
}
```

#### Propriedades de transição

- transition-delay: define quando a transição começará. Ex.: transition-delay: 2s.

- transition-duration: define quanto tempo a transição levará para ser concluída. Ex.: transition-duration: 2s.

- transition-property: define a propriedade que será animada. Ex.: transition-property: width.

- transition-timing-function: define como a transição será animada. Ex.: transition-timing-function: linear.


### Animation

A propriedade `animation` é uma propriedade abreviada para as propriedades `animation-name`, `animation-duration`,
`animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction` e `animation-fill-mode`.

```css
.change-color {
  animation: red-to-yellow 5s linear 2s infinite alternate;
}

@keyframes red-to-yellow {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
```

### Sugestões de atividades práticas

Estas sugestões podem ser desenvolvidas em sala de aula para exercitar os conceitos aprendidos neste módulo.

- Crie um arquivo `<username>/form.html` e use flexbox para organizar os elementos em linhas e colunas em um form de
  login e explore as pseudo-classes de validação de formulários;
- Crie um arquivo `<username>/animated.html` e use seletores de atributos, transform, transition e animation para
  animar o mascote do seu time ou algum pergonagem que ache interessante;

### Materiais Adicionais

Esta seção é opcional, mas caso queira se aprofundar mais no assunto, você pode consultar os materiais a seguir.

#### Artigos

- [Transform no MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform)
- [Transition no MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

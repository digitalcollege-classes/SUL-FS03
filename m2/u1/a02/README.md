# 2 - Processos e Estruturas Básicas de Controle e Repetição

O objetivo é levar o aluno a compreender que o código escrito sempre vai representar uma instrução para algum problema
que já existe no mundo real e que precisa ser mapeado dentro do universo computacional. Modelagem de processos, e
estruturas como if e for serão introduzidas nesta aula, bem como o conceito de debug.

## Conteúdo

### Modelagem de Processos

A modelagem de processos é uma técnica utilizada para mapear um processo do mundo real dentro do universo computacional.
Modelar, ou pelo menos, descrever os processos em que irá atuar é importante porque é ela que vai determinar a qualidade
do código que será escrito.

#### Fluxograma

O fluxograma é uma das formas de modelagem de processos. Ele é utilizado para representar graficamente um processo.
Os modelos baseados em fluxograma são compostos por símbolos que representam as etapas do processo e setas que indicam a
direção do fluxo.

##### Simbologia de um Fluxograma

- Início/Fim: Representa o início e o fim do fluxo;
- Processo: Representa uma etapa do fluxo;
- Decisão: Representa uma decisão a ser tomada;
- Conector: Representa a continuação do fluxo em outra parte do fluxograma;

##### Fluxogramas para a programação informática / algoritmos

Como representação visual do fluxo de dados, fluxogramas são úteis para escrever um programa ou algoritmo e explicá-lo
aos outros ou colaborar com eles. Você pode usar um fluxograma para descrever a lógica por trás de um programa antes
mesmo de começar a codificar o processo automatizado. Ele ajuda a organizar o seu pensamento de visão geral e fornece um
guia para quando chegar a hora de codificar. Mais especificamente, fluxogramas podem:

- Demonstrar a forma como o código é organizado;
- Visualizar a execução do código num programa;
- Mostrar a estrutura de um site ou aplicativo;
- Entender como usuários navegam um site ou programa.

Muitas vezes, programadores escrevem pseudocódigo, uma combinação de linguagem natural e linguagem de computador que
pode ser lido por pessoas. Isso pode proporcionar maiores detalhes do que contidos no fluxograma e servir para
substituir o fluxograma ou ser um próximo passo para criar o código real.

Diagramas relacionados usados em software de computador incluem:

- Linguagem de modelagem unificada ([UML](https://pt.wikipedia.org/wiki/UML)): uma linguagem geral usada na engenharia
  de software para modelagem;
- Diagramas Nassi-Schneiderman: usados para a programação estruturada de computadores. Nomeado em homenagem a Isaac
  Nassi e Ben Schneiderman, que desenvolveu o diagrama em 1972, na universidade SUNY-Stony Brook. Também chamado de
  estruturogramas;
- Gráficos DRAKON: [DRAKON](https://pt.wikipedia.org/wiki/DRAKON) é uma linguagem de programação visual algorítmica
  usada para criar fluxogramas.

##### Modelando processos com fluxogramas

Bora entrar no [app.diagrams.net](https://app.diagrams.net) e modelar um fluxograma.

Criar um fluxograma que leve uma pessoa de sua casa até o mercado para comprar pão. Caso o pão não esteja fresquinho é
preciso ir até a padaria.
O fluxo a ser modelado envolver caminhar metros, virar nas direções da rosa dos ventos e tomar decisões. Os principais
comandos que podem ser usados são `caminhar(metros)`, `virar(direção)` e as decisões são represetadas
por `se(condição)`.

![image](https://github.com/digitalcollege-classes/SUL-FS03/assets/803733/740c45a2-0733-4dc7-9591-f3278daf4767)

##### BPMN

Fica aqui uma menção honrosa a uma notação de diagramas prima do fluxograma chamada BPMN. O BPMN foi criado para modelar
processos de negócio.
Ele entrega uma experiência mais direcionada para tratarmos dos processos de negócios do que o fluxograma e existem
ferramentas que são capazes de modelar e executar
grandes processos de grandes empresas.

![image](https://github.com/digitalcollege-classes/SUL-FS03/assets/803733/104ebfe0-6b7f-4b66-a0d2-4f99f0da22e9)

O [bpmn.io](https://bpmn.io/) é uma ferramenta muito simples e prática para criarmos modelos BPMN.

#### Estruturas de controle

<p align="center">
  <img
    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/database-flowchart.svg"
    alt="fluxograma como código"
    width="400px"
  >
</p>

##### Estruturas de controle condicional

Estruturas de controle condicional são estruturas que permitem que o fluxo do programa seja alterado de acordo com uma
condição. Em outras palavras, elas permitem que o programa tome decisões.

###### if

O `if` é uma estrutura de controle condicional que permite que o fluxo do programa seja alterado de acordo com uma
condição. Em outras palavras, ele permite que o programa tome decisões.

```js
if (condição) {
  // código a ser executado caso a condição seja verdadeira
}
```

Exemplo:

```js
if (true) {
  console.log("A condição é verdadeira");
}
```

###### if...else

O `if...else` é uma estrutura de controle condicional que permite que o fluxo do programa seja alterado de acordo com
uma condição. Em outras palavras, ele permite que o programa tome decisões.

```js
if (condição) {
  // código a ser executado caso a condição seja verdadeira
} else {
  // código a ser executado caso a condição seja falsa
}
```

Exemplo:

```js
if (true) {
  console.log("A condição é verdadeira");
} else {
  console.log("A condição é falsa");
}
```

##### Estruturas de controle de repetição

Estruturas de controle de repetição são estruturas que permitem que o fluxo do programa seja repetido de acordo com uma
condição. Em outras palavras, elas permitem que o programa repita uma ação.

###### for

O `for` é uma estrutura de controle de repetição que permite que o fluxo do programa seja repetido de acordo com uma
condição. Em outras palavras, ele permite que o programa repita uma ação.

```js
for (inicialização; condição; incremento) {
  // código a ser executado
}
```

Exemplo:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

#### Debugar

Debugar é o processo de identificar, analisar e corrigir erros ou falhas em um programa de computador ou em um sistema
de software. Quando um programa não funciona corretamente ou não produz os resultados esperados, o processo de debugar é
utilizado para encontrar a origem do problema e corrigi-lo.

Durante a fase de desenvolvimento de software, os programadores podem inserir instruções específicas chamadas "pontos de
interrupção" em partes do código onde acreditam que podem ocorrer problemas. Quando o programa é executado em um
ambiente de depuração, ele para automaticamente nessas instruções, permitindo ao desenvolvedor examinar o estado interno
do programa, como o valor das variáveis, o fluxo de execução e a pilha de chamadas de funções.

Os desenvolvedores também podem utilizar ferramentas de depuração, que oferecem recursos avançados para rastrear a
execução do programa passo a passo, examinar o conteúdo da memória e realizar outras ações para entender e corrigir
problemas. Com essas informações, os programadores podem identificar onde o código está se comportando de forma
inadequada e realizar as correções necessárias para que o programa funcione corretamente.

O processo de debugar pode ser um desafio, especialmente em programas complexos, mas é uma habilidade essencial para os
desenvolvedores de software garantirem a qualidade e a confiabilidade de seus produtos.

##### Depurar no VS Code

O VS Code possui uma ferramenta de debugar integrada. Para utilizá-la, basta clicar no ícone de "bug" na barra lateral
esquerda ou pressionar `Ctrl + Shift + D`.

![image](https://github.com/digitalcollege-classes/SUL-FS03/assets/803733/1f046764-b1a3-4014-a650-48f70a6c415d)


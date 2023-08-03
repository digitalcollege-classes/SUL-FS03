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

- Linguagem de modelagem unificada ([UML](https://pt.wikipedia.org/wiki/UML)): uma linguagem geral usada na engenharia de software para modelagem;
- Diagramas Nassi-Schneiderman: usados para a programação estruturada de computadores. Nomeado em homenagem a Isaac
  Nassi e Ben Schneiderman, que desenvolveu o diagrama em 1972, na universidade SUNY-Stony Brook. Também chamado de
  estruturogramas;
- Gráficos DRAKON: [DRAKON](https://pt.wikipedia.org/wiki/DRAKON) é uma linguagem de programação visual algorítmica
  usada para criar fluxogramas.

##### Modelando processos com fluxogramas

Bora entrar no [app.diagrams.net](https://app.diagrams.net) e modelar um fluxograma.

Criar um fluxograma que leve uma pessoa de sua casa até o mercado para comprar pão. Caso o pão não esteja fresquinho é preciso ir até a padaria.
O fluxo a ser modelado envolver caminhar metros, virar nas direções da rosa dos ventos e tomar decisões. Os principais comandos que podem ser usados são `caminhar(metros)`, `virar(direção)` e as decisões são represetadas por `se(condição)`.   

![image](https://github.com/digitalcollege-classes/SUL-FS03/assets/803733/740c45a2-0733-4dc7-9591-f3278daf4767)


##### BPMN

Fica aqui uma menção honrosa a uma notação de diagramas prima do fluxograma chamada BPMN. O BPMN foi criado para modelar processos de negócio.
Ele entrega uma experiência mais direcionada para tratarmos dos processos de negócios do que o fluxograma e existem ferramentas que são capazes de modelar e executar
grandes processos de grandes empresas.

![image](https://github.com/digitalcollege-classes/SUL-FS03/assets/803733/104ebfe0-6b7f-4b66-a0d2-4f99f0da22e9)

O [bpmn.io](https://bpmn.io/) é uma ferramenta muito simples e prática para criarmos modelos BPMN.

#### Estruturas de controle

<p align="center">
  <img
    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/database-flowchart.svg"
    alt="flugrama como código"
  >
</p>



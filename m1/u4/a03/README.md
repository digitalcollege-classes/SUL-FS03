# 3 - Bootstrap: Responsividade

Compreender o conceito de responsividade e como ele é implementado no Bootstrap

### Conteúdo

A responsividade é a capacidade de um site de se adaptar a diferentes tamanhos de tela. Ela é muito importante para
melhorar a experiência do usuário, pois permite que o site seja acessado em diferentes dispositivos, como celulares,
tablets, notebooks, desktops, etc. Usamos a responsividade como um conceito que pode ser representado por várias
técnicas, como, por exemplo, o uso de media queries, usadas para definir estilos diferentes para diferentes
tamanhos de tela.

### Responsividade

O recurso citado anteriormente chamado de media queries, é um recurso do CSS que permite definir estilos diferentes
para diferentes tamanhos de tela. O Bootstrap utiliza esse recurso para definir estilos diferentes para diferentes
tamanhos de tela.

#### Media queries

Para aplicar uma variação de estilos de acordo com alguns critérios do dispositivo podemos usar algo como a sintaxe
que pode ser vista a seguir. O exemplo abaixo demonstra uma _media query_.

```
@media not|only mediatype and (expression) {
  selector {
    property: value;
  }
}
```

Nesse exemplo, o estilo que deixa o texto vermelho será aplicado quando a largura da tela for menor que 600px.

```css
@media (max-width: 600px) {
    .class {
        color: red;
    }
}
```

#### Grades responsivas

A responsividade é a capacidade de um site de se adaptar a diferentes tamanhos de tela. O Bootstrap possui um sistema de
grid que permite a criação de layouts responsivos. O grid é composto por 12 colunas, que podem ser combinadas para
criar diferentes layouts. O grid é dividido em alguns padrões de classes que podem ser vistos a seguir.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Extra small<br>
        <small>&lt;576px</small>
      </th>
      <th class="text-center">
        Small<br>
        <small>≥576px</small>
      </th>
      <th class="text-center">
        Medium<br>
        <small>≥768px</small>
      </th>
      <th class="text-center">
        Large<br>
        <small>≥992px</small>
      </th>
      <th class="text-center">
        Extra large<br>
        <small>≥1200px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Max container width</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td><code>.col-</code></td>
      <td><code>.col-sm-</code></td>
      <td><code>.col-md-</code></td>
      <td><code>.col-lg-</code></td>
      <td><code>.col-xl-</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutter width</th>
      <td colspan="5">30px (15px on each side of a column)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
  </tbody>
</table>

Exemplo:

```html

<div class="container">
  <div class="row">
    <div class="row">
      <div class="col-6">.col-6</div>
      <div class="col-6">.col-6</div>
    </div>
    <div class="row">
      <div class="col-sm-8">.col-md-8</div>
      <div class="col-sm-4">.col-md-4</div>
    </div>
    <div class="row">
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
    </div>
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4">.col-md-4</div>
    </div>
    <div class="row">
      <div class="col-xl-6">.col-xl-6</div>
      <div class="col-xl-6">.col-xl-6</div>
    </div>
  </div>
</div>
```

#### Visibilidade

Outra coisa importante a respeito de divs responsivas, são os utilitários, que servem para ocultar ou mostrar elementos
de acordo com o dispositivo, esses classnames devem ser adicionados ao elemento que deverá receber sua propriedade e são
os seguintes:


<table class="table">
  <thead>
    <tr>
      <th>Screen size</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hidden on all</td>
      <td><code>.d-none</code></td>
    </tr>
    <tr>
      <td>Hidden only on xs</td>
      <td><code>.d-none .d-sm-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on sm</td>
      <td><code>.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on md</td>
      <td><code>.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on lg</td>
      <td><code>.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on xl</td>
      <td><code>.d-xl-none .d-xxl-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on xxl</td>
      <td><code>.d-xxl-none</code></td>
    </tr>
    <tr>
      <td>Visible on all</td>
      <td><code>.d-block</code></td>
    </tr>
    <tr>
      <td>Visible only on xs</td>
      <td><code>.d-block .d-sm-none</code></td>
    </tr>
    <tr>
      <td>Visible only on sm</td>
      <td><code>.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
      <td>Visible only on md</td>
      <td><code>.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
      <td>Visible only on lg</td>
      <td><code>.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible only on xl</td>
      <td><code>.d-none .d-xl-block .d-xxl-none</code></td>
    </tr>
    <tr>
      <td>Visible only on xxl</td>
      <td><code>.d-none .d-xxl-block</code></td>
    </tr>
  </tbody>
</table>

### Temas

- [Bootswatch: Temas para o Bootstrap](https://bootswatch.com/)

### Exercícios sugeridos

- Crie uma página que contenha um menu de navegação, um cabeçalho, um rodapé e um conteúdo principal. O menu de
  navegação deve conter links para as seções da página. O cabeçalho deve conter uma imagem e um título. O conteúdo
  principal deve conter um texto e uma imagem. O rodapé deve conter informações sobre o autor e um link para o seu
  portfólio. A página deve ser responsiva e deve ser possível visualizar o conteúdo em diferentes tamanhos de tela.
  Utilize o Bootstrap para criar a página.
- Alinhe dois elementos lado a lado, um com 6 colunas e outro com 6 colunas, em telas grandes. Em telas médias, faça
  com que os elementos fiquem um embaixo do outro, cada um ocupando 12 colunas. Em telas pequenas, faça com que os
  elementos fiquem um embaixo do outro, cada um ocupando 12 colunas. Utilize o Bootstrap para criar a página.

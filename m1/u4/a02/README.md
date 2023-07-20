# 2 - Bootstrap: Components & Forms

### Objetivo

Conhecer e criar uma página usando Bootstrap explorando os componentes para diagramação e posicionamento.

### Conteúdo

#### Componentes para formulários

O Bootstrap possui diversos componentes para formulários que podem ser usados para criar formulários de forma rápida e
fácil. Alguns desses componentes são: input, textarea, select, checkbox, radio, switch, range, file, etc.

##### Input

O input é o componente que permite a entrada de dados. Ele pode ser usado para receber dados de texto, números, datas,
horas, etc. O Bootstrap possui diversos estilos para o input, como: text, password, email, number, date, time, etc.

Exemplos:

```html

<input
  type="text"
  class="form-control"
  placeholder="Digite seu nome"
>
<input
  type="password"
  class="form-control"
  placeholder="Digite sua senha"
>
<input
  type="email"
  class="form-control"
  placeholder="Digite seu e-mail"
>
<input
  type="number"
  class="form-control"
  placeholder="Digite seu número"
>
<input
  type="date"
  class="form-control"
  placeholder="Digite sua data"
>
<input
  type="time"
  class="form-control"
  placeholder="Digite seu horário"
>
```

##### Textarea

O textarea é o componente que permite a entrada de dados em múltiplas linhas. Ele pode ser usado para receber dados
como comentários, descrições, etc.

Exemplo:

```html

<textarea
  class="form-control"
  placeholder="Digite seu comentário"
></textarea>
```

##### Select

O select é o componente que permite a seleção de dados. Ele pode ser usado para receber dados como gênero, estado civil,
etc. O Bootstrap possui diversos estilos para o select, como: select, select-sm, select-lg, etc.

Exemplo:

```html

<select class="form-control">
  <option value="">Selecione</option>
  <option value="1">Masculino</option>
  <option value="2">Feminino</option>
</select>
```

##### Checkbox

O checkbox é o componente que permite a seleção de dados. Ele pode ser usado para receber dados como gênero, estado
civil, etc. O Bootstrap possui diversos estilos para o checkbox, como: checkbox, checkbox-inline, etc.

Exemplo:

```html

<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="defaultCheck1"
  >
  <label
    class="form-check-label"
    for="defaultCheck1"
  >
    Default checkbox
  </label>
</div>
```

##### Radio

O radio é o componente que permite a seleção de dados. Ele pode ser usado para receber dados como gênero, estado civil,
etc. O Bootstrap possui diversos estilos para o radio, como: radio, radio-inline, etc.

Exemplo:

```html

<div class="form-check">
  <input
    class="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios1"
    value="option1"
    checked
  >
  <label
    class="form-check-label"
    for="exampleRadios1"
  >
    Default radio
  </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios2"
    value="option2"
  >
  <label
    class="form-check-label"
    for="exampleRadios2"
  >
    Second default radio
  </label>
</div>
<div class="form-check disabled">
  <input
    class="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios3"
    value="option3"
    disabled
  >
  <label
    class="form-check-label"
    for="exampleRadios3"
  >
    Disabled radio
  </label>
</div>
```

#### Criando um formulário

Podemos usar todos os elementos que vimos anteriormente para criar um formulário. Veja o exemplo abaixo:

```html

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    >
    <small
      id="emailHelp"
      class="form-text text-muted"
    >We'll never share your email with anyone else.
    </small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    >
  </div>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      id="exampleCheck1"
    >
    <label
      class="form-check-label"
      for="exampleCheck1"
    >Check me out
    </label>
  </div>
  <button
    type="submit"
    class="btn btn-primary"
  >Submit
  </button>
</form>
```

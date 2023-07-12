# 1 - Fluxos de uso do Git

### Objetivo

Desenvolver conhecimentos sobre os principais fluxos de uso do git e como resolvê-los

### Conteúdo

#### Fluxo de uso do git

O git é uma ferramenta de versionamento de código, que permite que um projeto seja desenvolvido por várias pessoas ao
mesmo tempo, sem que haja conflitos entre as alterações feitas por cada uma delas. Para isso, o Git utiliza um sistema
de branches, que são ramificações do projeto principal, onde cada pessoa pode trabalhar em uma branch diferente, e
depois unir as alterações feitas em uma branch principal, chamada de `master` ou `main`.

<p align="center">
  <img
    src="https://www.nobledesktop.com/image/gitresources/git-branches-merge.png"
    alt="git"
    height="300"
  >
</p>

#### Principais comandos

##### `git init`

Inicializa um repositório git em um diretório. Esse comando deve ser executado apenas uma vez, no início do projeto.
Exemplo de uso:

```bash
git init
```

Com o parâmetro `--bare` é possível criar um repositório git sem um diretório de trabalho, que pode ser usado para
armazenar repositórios remotos. Exemplo de uso:

```bash
git init --bare
```

Este tipo de repositório é usado para armazenar repositórios remotos, e não deve ser usado para trabalhar diretamente
com o código.


##### `git clone`

Clona um repositório remoto para um repositório local. Exemplo de uso:

```bash
git clone git@github.com:digitalcollege-classes/SUL-FS03.git
```

##### `git status`

Exibe o status do repositório. Exemplo de uso:

```bash
git status
```

##### `git add`

Adiciona arquivos para serem usados em um `commit`. Exemplo de uso:

```bash
git add README.md
```

Também é possível apontar para um diretório, para adicionar todos os arquivos dentro dele. Exemplo de uso:

```bash
git add .
```

##### `git commit`

Cria um commit com as alterações feitas no repositório. Exemplo de uso:

```bash
git commit -m "Mensagem do commit"
```

Ao executar este comando todos os arquivos adicionados com o comando `git add` serão inclusos no `commit`.


##### `git push`

Envia os `commits` criados para um repositório remoto. Exemplo de uso:

```bash
git push
```

Caso seja uma `branch` nova pode ser preciso passar alguns parâmetros adicionais. Exemplo de uso:

```bash
git push -u origin main
```

##### `git pull`

Baixa as alterações feitas em um repositório remoto para o repositório local. Exemplo de uso:

```bash
git pull
```

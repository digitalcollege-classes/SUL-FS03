# Git do 0 ao 1

### Configuração inicial

Certifique-se de que você tem o Git instalado na sua máquina. Para isso, rode o comando abaixo no terminal:

```bash
git --version
```

Caso o resultado não seja a versão do Git instalada, instale-o. Este processo vai depender do seu sistema operacional.

#### Instalação

##### Windows

Acesse o [site oficial do Git](https://git-scm.com/download/win) e baixe o instalador. Execute-o e siga as instruções.

##### Linux

Acesse o [site oficial do Git](https://git-scm.com/download/linux) e siga as instruções.

Caso esteja usando distribuições que usam o gerenciador de pacotes APT, como Ubuntu, Debian, Linux Mint, etc, rode o
comando abaixo no terminal:

```bash
sudo apt install git
```

##### Mac

Acesse o [site oficial do Git](https://git-scm.com/download/mac) e siga as instruções.

Caso esteja familiarizado com o Brew, rode o comando abaixo no terminal:

```bash
brew install git
```

### Configuração inicial

Estas instruções têm o objetivo de orientar o aluno a preparar um projeto para ser versionado com o Git.
Elas consistem em criar uma cópia local do projeto, configurar a autoria dos commits e configurar o acesso aos
repositórios remotos.

#### Clonar um projeto

Para clonar um projeto, acesse o terminal e vá até à pasta onde você deseja que o projeto seja clonado. De lá, rode o
comando abaixo:

```bash
git clone <url_do_projeto>
```

No nosso caso o comando seria baseado na URL do projeto principal (upstream) ou nos forks (origin) de cada aluno.
Um exemplo seria:

```bash
git clone git@github.com:digitalcolleger/SUL-FS03.git
```
Onde `digitalcolleger` é o nome do usuário no GitHub e `SUL-FS03` é o nome do repositório.

#### Configurar a autoria dos commits

Acesse o terminal e vá até à pasta do seu projeto. De lá rode os comandos a seguir

```bash
git config user.email "<your_email@example.com>"
```

```bash
git config user.name "<your_name>"
```

#### Aplicando mudanças ao repositório

Nesta seção veremos como funciona o fluxo de trabalho com o Git. Para isso, vamos utilizar o repositório que acabamos de
clonar.

##### Verificar o status do repositório

Para verificar o status do repositório, rode o comando abaixo no terminal:

```bash
git status
```

A saída será algo parecido com o que está abaixo:

```bash
On branch main
Your branch is up to date with 'origin/main'.
```

##### Adicionar arquivos

#### Acesso a repositórios remotos

O acesso aos repositórios remotos tem sido desencorajado por meio de senha. Para isso, é necessário gerar uma chave SSH
e cadastrá-la no GitHub.

##### Gerar chave SSH

Use o comando abaixo para gerar uma chave SSH. Na parte que perguntar onde salvar a chave tente já apontar para o
diretório onde está o repositório.

```bash
ssh-keygen -t ed25519 -C "<your_email@example.com>"
```

##### Configuração da chave

Cadastre esta chave gerada no GitHub.

##### Usar a chave SSH para autorizar os commits

```bash
git config --add --local core.sshCommand 'ssh -i <your_ssh_key>'
```

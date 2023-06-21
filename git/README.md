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

```output
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

##### Abrir o VSCode

Para abrir o VSCode, rode o comando abaixo no terminal:

```bash
code .
```

Você também pode abrir o VSCode pelo menu do seu sistema operacional ou atalhos no seu desktop.

##### Adicionar arquivos

Podemos fazer as alterações que queremos para o nosso projeto e em seguida adicionar os arquivos que queremos que sejam
versionados.

Edite, crie ou apague arquivos e pastas no seu projeto. Em seguida, rode o comando abaixo no terminal para verificar o
`status` do repositório:

```bash
git status
```

Para adicionar arquivos que foram modificados, rode o comando abaixo no terminal:

```bash
git add <file_name>
```

Caso queira adicionar todas as mudanças podemos usar o `.` como parâmetro:

```bash
git add .
```

##### Criar um commit

Para criar um commit, rode o comando abaixo no terminal:

```bash
git commit -m "<commit_message>"
```

Para ver o histórico local de commits do repositório, rode o comando abaixo no terminal:

```bash
git log
```

> Use o atalho `q` para sair do log caso ele seja muito grande e a tela fique travada.

#### Acesso a repositórios remotos

Se tentarmos fazer um `push` da forma com que nosso projeto está momento receberemos um erro porque ele não estará
configurado para acessar o repositório remoto. Para isso, precisamos configurar o acesso aos repositórios remotos.

Exemplo de erro:

```output
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 713 bytes | 713.00 KiB/s, done.
Total 7 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To github.com:digitalcolleger/SUL-FS03.git
 ! [remote rejected] main -> main (permission denied)
error: failed to push some refs to 'github.com:digitalcolleger/SUL-FS03.git'
```

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

#### Enviar commits para o repositório remoto

Para enviar os commits para o repositório remoto, rode o comando abaixo no terminal:

```bash
git push
```

Exemplo de `push` bem sucedido:

```output
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 713 bytes | 713.00 KiB/s, done.
Total 7 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To github.com:digitalcolleger/SUL-FS03.git
   60e66b4..d5e2602  main -> main
```

### Problemas comuns

#### Erro ao fazer push

Caso você receba um erro parecido com o abaixo, significa que você não está com o repositório atualizado.

```output
To github.com:digitalcolleger/SUL-FS03.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'github.com:digitalcolleger/SUL-FS03.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
Para isso, rode o comando abaixo no terminal:
```bash
git pull
```

#### Conflitos ao fazer pull

Caso você receba um erro parecido com o abaixo, significa que você está tentando fazer um `pull` de um repositório que
possui mudanças que conflitam com as mudanças que você fez no seu repositório local.

```output
remote: Enumerating objects: 31, done.
remote: Counting objects: 100% (29/29), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 17 (delta 10), reused 7 (delta 3), pack-reused 0
Unpacking objects: 100% (17/17), 3.45 KiB | 220.00 KiB/s, done.
From github.com:digitalcolleger/SUL-FS03
   d5e2602..ebabe26  main       -> origin/main
Auto-merging m1/u2/a04/digitalcolleger/index.html
CONFLICT (content): Merge conflict in m1/u2/a04/digitalcolleger/index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Para resolver este problema abra os arquivos listados e resolva os conflitos. Em seguida, rode o comando abaixo no
terminal:

```bash
git add .
git commit -m "Resolvendo conflitos"
git push
```

### Material em video

[Criar clone local](https://youtu.be/PJYPtzZFjOU)

[Configurar autoria dos commits](https://youtu.be/qGtEr8h98g4)

[Manipulação de arquivos](https://youtu.be/8drU6mQDl_0)

[Configuração para trabalhar com repositórios remotos (acesso via SSH)](https://youtu.be/18YWZdit3_8)

### Material adicional

- [Git e GitHub para iniciantes](https://www.youtube.com/watch?v=2alg7MQ6_sI)

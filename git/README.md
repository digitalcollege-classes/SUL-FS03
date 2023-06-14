# Git do 0 ao 1

### Geração de chave

Use o comando abaixo para gerar uma chave SSH. Na parte que perguntar onde salvar a chave tente já apontar para o diretório onde está o repositório.
```bash
ssh-keygen -t ed25519 -C "<your_email@example.com>"
```

### Configuração da chave
Cadastre esta chave que foi gerada no GitHub.

### Configurar a autoria dos commits

Acesse o terminal e vá até a past do seu projeto. De lá rode os comandos a seguir
```bash
git config user.email "<your_email@example.com>"
```
```bash
git config user.name "<your_name>"
```

### Usar a chave SSH para autorizar os commits
```bash
git config --add --local core.sshCommand 'ssh -i <your_ssh_key>'
```

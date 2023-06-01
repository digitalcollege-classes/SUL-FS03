# Git do 0 ao 1

Use o comando abaixo para gerar uma chave SSH
```bash
ssh-keygen -t ed25519 -C "<your_email@example.com>"
```

Copie a chave gerada para um diretório mais reservado como o `Documents`.

Acesse o terminal e vá até a past do seu projeto. De lá rode os comandos a seguir

```bash
git config user.email "<your_email@example.com>"
```

```bash
git config user.name "<your_name>"
```

```bash
git config --add --local core.sshCommand 'ssh -i <your_ssh_key>'
```

@echo off

git config init.defaultbranch main
git config pull.rebase true
set /p "email=Enter Email (ex.: student@gmail.com): "
git config user.email "%email%"
set /p "name=Enter Name (ex.: Student Smith): "
git config user.name "%name%"
set /p "sshKey=Enter SSH Key path (ex.: /Users/username/.git/id_ed25519): "
git config --add --local core.sshCommand 'ssh -i %sshKey%'

@echo on

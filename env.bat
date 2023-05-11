@echo off

git config --system --unset credential.helper

git config --global --unset credential.helper
git config --global credential.modalprompt false
git config --global init.defaultbranch main
git config --global pull.rebase true
set /p "email=Enter Email: "
git config --global user.email "%email%"
set /p "name=Enter Name: "
git config --global user.name "%name%"

@echo on

git config --system --list
git config --global --list
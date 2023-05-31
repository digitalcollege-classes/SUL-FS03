git config init.defaultbranch main
git config pull.rebase true
read -p -r "Enter Email (ex.: student@gmail.com): " email
git config user.email "$email"
read -p -r "Enter Name (ex.: Student Smith): " name
git config user.name "$name"
read -p -r "Enter SSH Key path (ex.: /Users/username/.git/id_ed25519): " sshKey
git config --add --local core.sshCommand "ssh -i $sshKey"

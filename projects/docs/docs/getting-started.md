# Getting started

## Access

NGC is accessed via remote workspace called **sandbox**. If you don't have an access to it you may try to request it at our  [developers discord server](https://discord.gg/CJYHdKCp).

## Prerequisites

The following software is required to work with remote sandbox and needs to be installed on your machine:

- OpenVPN client
- GnuPG
- OpenSSH
- Visual Studio Code

### Linux users

Linux users comes with OpenSSH installed already. Just install OpenVPN client and GnuPG. To do so, open terminal and execute the following command:

```sudo apt-get install -y openvpn gnupg```

If you don't have Visual Studio Code installed please follow [official documentation](https://code.visualstudio.com/docs/setup/linux)


- [Windows users](https://openvpn.net/client-connect-vpn-for-windows/)
- [MacOS users](https://openvpn.net/client-connect-vpn-for-mac-os/)
- Linux users: Install directly from terminal with
  ```sudo apt-get install openvpn```


In order to connect to VPN you need to have your client certificates which we share as encrypted with GPG keys. Before creating a sandbox 
it is required for you to setup your GPG keys. Grab it and install GnuPG 2.3.6 Signature directly from GnuPG <a href="https://gnupg.org/download/">download section</a>. 
Then, please follow <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key">the instructions</a> 
from GitHub documentation to setup your keyring. Do defualt for all the options. Skip uploading your public key to GitHub and instead upload it to your GitLab account in 
db.nomocode.io <a href="https://db.nomocode.io/-/profile/gpg_keys">here</a>. Please note key you setup must match email in your GitLab account. Also remember to save your passphrase in bitwarden, so you do not forget or lose it. it is reccomended however you use a short and easily-remeberable passphrase.


When this is done, you can create your sandbox by issueing the following command in <a href="https://discord.com/channels/836980618239803434/839980384627982377">discord ngc channel</a>:

!ngc sandbox start

When your sandbox is ready(2-5 mins.) you will recieve notification from Sandbox bot. In the message there will be links to your OpenVPN client certificates. Download one based on 
which operating system you have and then decrypt it with GPG, it is reccomended you decrypt the GPG key with GitBash instead of powershell. Also remember to CD into the folder yout gpg key is in. ( here as an example user named Charlie ):

gpg --output Charlie.ovpn --decrypt Charlie.ovpn.gpg

Load your OpenVPN profile ( decrypted client certificates ) to OpenVPN Connect application and connect to VPN. For Linux users connect 
from terminal ( substitude config path accordingly ):

sudo openvpn --config /path/to/your/certs/Charlie.ovpn

After successfully connecting to VPN network open the following link in your web browser

<a href="http://sandbox.ngc">http://sandbox.ngc</a>

Then open console in code server and init your workspace with the following command

ngc init

You will be asked to generate your ssh keypair. Just follow the instructions and upload your public ssh key to your GitLab account. 
Next, when everything is done. Open ~/workspace directory.

You are now ready to go! Just as a starting example you can build and explore this documentation project inside your sandbox.
Copy and run the following command in terminal

cd projects/docs && ngc build

Then, visit <a href="http://docs.ngc">http://docs.ngc</a>

When you are finished with your development in sandbox just disconnect from VPN network and issue the following command in discord ngc channel:

!ngc sandbox stop

Next time connection
The above instructions were just one time setup, next time when you will want to enter your sandbox just type in discord ngc channel:

!ngc sandbox start
Then wait for notification from Sandbox bot and connect to VPN and open <a href="http://sandbox.ngc">sandbox</a> in your browser.
<p>When finished you can stop it with:</p>
<code>!ngc sandbox stop</code>
<h4>Destroying your sandbox</h4>
<p>
You may decide at some point you don't want to use your sandbox anymore. You can destroy your sandbox completely which is also equivalent to 
removing all of your data stored in sandbox - you will no longer be able to connect to sandbox with your current VPN certificates and you will 
need to through the first time setup instructions once again. In order to destroy the sandbox type the following command in discord ngc channel:
</p>
<code>!ngc sandbox destroy</code>

 
NGC operates on **workspaces**. Workspace is a filesystem directory with a special prepared structure.

Code in sandbox is managed by git version control system. Sandbox can use multiple git repositories (private or public) and there is also one special - <a href="https://db.nomocode.io/community/sandbox">official community sandbox</a>.
This is the default repo when setting up your sandbox. 
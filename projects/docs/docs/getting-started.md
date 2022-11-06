# Getting started

## Accessing NGC

NGC is accessed via remote workspace called **sandbox**. Access for each user needs to be explicitly granted by the maintainer. If you don't have access to it reach out to us on our [developers discord server](https://discord.gg/CJYHdKCp).

## Prerequisites

The following software is required to work with remote sandbox and needs to be installed on your machine:

- **OpenVPN client** - sandbox is accessible in private network only
- **GnuPG** - encrypting tools NGC uses to store and share sensitive data
- **OpenSSH** - to securely access sandbox through ssh protocol
- **Visual Studio Code** - best suited IDE for working with NGC

### Linux users

Linux users comes with OpenSSH installed already. Just install OpenVPN client and GnuPG. To do so, open terminal and execute the following command:

```bash
sudo apt-get install -y openvpn gnupg
```

If you don't have Visual Studio Code installed please follow [official documentation](https://code.visualstudio.com/docs/setup/linux)

### Windows users

OpenVPN for Windows is fully fledged graphical application. Download and install OpenVPN client from the following [link](https://openvpn.net/client-connect-vpn-for-windows/)

Download and install GnuPG from the [gpg4win](https://gpg4win.org/download.html)

Install [OpenSSH for Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui) if you don't have already.

If you don't have Visual Studio Code installed please follow [official documentation](https://code.visualstudio.com/docs/setup/windows)

### MacOS users

Download and install OpenVPN client for MacOS from the following [link](https://openvpn.net/client-connect-vpn-for-mac-os/)

Install OpenSSH and GnuPG. Open terminal and execute:

```bash
brew install openssh gnupg
```

If you don't have Visual Studio Code installed please follow [official documentation](https://code.visualstudio.com/docs/setup/mac)

## Prepare your GPG keypair

Please follow [the instructions](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
from GitHub documentation to setup your GPG keyring. Skip the last step for uploading your public key to GitHub and instead upload it to your GitLab account at db.nomocode.io [here](https://db.nomocode.io/-/profile/gpg_keys"). Please note, **the key you setup must match email in your GitLab account**.

## Spawn sandbox

When above steps are completed, you can create your sandbox by issueing the following command in <a href="https://discord.com/channels/836980618239803434/839980384627982377">discord ngc channel</a>:

```
!ngc sandbox start
```

Launching sandbox takes about 2~5 mins. Wait until you get direct discord message from **Sandbox** bot. 

## Connect to VPN network

In the message from **Sandbox** bot there will be links to your OpenVPN client certificates. Download one based on which operating system you have and then decrypt it with GPG. For example to decrypt VPN certificates for downloaded file *Charlie.ovpn.gpg* open terminal in the directory where this file is stored and execute:

```bash
gpg --output Charlie.ovpn --decrypt Charlie.ovpn.gpg
```

Next load your OpenVPN profile ( decrypted client certificates ) to OpenVPN Connect application and connect to VPN. For Linux users connect 
from terminal ( substitude config path accordingly ):

```bash
sudo openvpn --config /path/to/your/certs/Charlie.ovpn
```

---

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
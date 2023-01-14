export class Startscreen extends Phaser.Scene {
    logo: any;
    play: any;
    theme: any;
    discord: any;
    mobileOff: any;
    mobileState: any;
    width: number = window.innerWidth;
    height: number = window.innerHeight;
    constructor() {
        super({
            key: "Startscreen"
        });
    }

    preload() {
        this.load.image("background", "assets/Backgrounds/background.png")
        this.load.image("logo", "assets/Logos/Logo_Full.png");
        this.load.image("discord", "assets/Logos/discord-logo.png");
        this.load.image("play", "assets/UI/play.png");
        this.load.audio('theme', 'assets/bg_music.mp3');
        this.load.image("mobileOff", 'assets/UI/mobileOff.png')
        this.load.image("mobileOn", 'assets/UI/mobileOn.png')
    }

    create() {
        this.add.tileSprite(this.width / 2, this.height / 2, this.width, this.height, "background");
        this.add.text(this.width / 7, this.height / 3, "Miner is a 2D Idle Game\nwere you goal is to farm planets\nresources in exchange for in-game\ncurrency. the more resources you\nget, the farther you can expand \nyour economic emprire! ", { fontFamily: "'Open Sans', sans-serif, 'Orbitron', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace" }).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
        this.add.text(0, 0, "© 2022 Miner Game, All rights reserved. \n Game by Chpsterz#0001 \n Special Thanks to Nomo#7330", { fontFamily: "'Open Sans', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace" }).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
        this.add.text(0, this.height / 1.2, "How to Play: \n \n Left Click: Mine/Click \n W/S: Accelerate/Deccelerate \n A/D: Left/Right \n F: Factory \n ESC: Game Menu", { fontFamily: "'Open Sans', sans-serif, 'Roboto', sans-serif, 'Roboto Mono', monospace" }).setScrollFactor(0).setFontSize(18).setColor('#ffffff').setBackgroundColor("#000000");
        this.logo = this.physics.add.image(this.width / 2, this.height / 2.5, "logo").setScale(1.4).setDepth(3);
        this.mobileOff = this.physics.add.image(this.width / 2, this.height / 1.4, "mobileOff").setDepth(3).setScale(0.5).setInteractive();
        if(!localStorage.getItem("mobileState")) {
            this.mobileState = localStorage.setItem("mobileState", "false");
        }
        else if(localStorage.getItem("mobileState") === "false") {
                this.mobileOff.setTexture("mobileOff")
        }
        else if(localStorage.getItem("mobileState") === "true") {
                this.mobileOff.setTexture("mobileOn")
         }
        this.play = this.physics.add.image(this.width / 2, this.height / 1.7, "play").setScale(1).setInteractive();
        this.discord = this.add.image(1850, this.height / 1.06, "discord").setScale(0.3).setInteractive();
        this.discord.on("pointerup", () => {
            window.open('https://discord.com/invite/5PfQSmsT2w', '_blank');
        })
        this.mobileOff.on("pointerup", () => {
            if(localStorage.getItem("mobileState") === "false") {
                this.mobileOff.setTexture("mobileOn")
                localStorage.setItem("mobileState", "true")
            }
            else if(localStorage.getItem("mobileState") === "true") {
                this.mobileOff.setTexture("mobileOff")
                localStorage.setItem("mobileState", "false")
            }
        })
        this.theme = this.sound.add('theme');
        this.theme.play()
        this.play.setInteractive();
        this.play.on("pointerup", () => {
            this.scene.start('Game')
            this.theme.stop();
        })
    }
    update() {
        this.width = window.innerWidth;
        this.height= window.innerHeight;
        this.logo.setPosition(this.width / 2, this.height / 2.5)
        this.play.setPosition(this.width / 2, this.height / 1.7)
    }
}
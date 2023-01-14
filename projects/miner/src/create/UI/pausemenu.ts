export default (getContext: any) => {
    getContext.menuBackground = getContext.add.image(window.innerWidth / 2, window.innerHeight / 2, "menuBackground").setScrollFactor(0).setScale(1.4).setDepth(5).setVisible(false);
    getContext.logo = getContext.add.image(window.innerWidth / 2, window.innerHeight / 7, "logo").setScrollFactor(0).setDepth(6).setVisible(false);
    getContext.homeButton = getContext.add.image(window.innerWidth / 2, window.innerHeight / 3.5, "homeButton").setScrollFactor(0).setScale(0.3).setDepth(6).setVisible(false);
    getContext.homeButton.setInteractive();
    let menuStatus = false;
    getContext.input.keyboard.on("keydown-ESC", () => {
        if (menuStatus === true) {
            getContext.menuBackground.setVisible(false)
            getContext.logo.setVisible(false)
            getContext.homeButton.setVisible(false)
            menuStatus = false;
            console.log("Off")
        }
        else if (menuStatus === false) {
            getContext.menuBackground.setVisible(true)
            getContext.logo.setVisible(true)
            getContext.homeButton.setVisible(true)
            menuStatus = true;
            console.log("On")
        }
    })
    getContext.homeButton.on("pointerup", () => { getContext.scene.start('Startscreen') })
}


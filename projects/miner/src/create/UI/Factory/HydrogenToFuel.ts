export default (getContext: any) => {
    getContext.slot2 = getContext.add.image(window.innerWidth / 1.85, window.innerHeight / 2,"convert").setScrollFactor(0).setScale(0.5).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.slot2.setInteractive();
    getContext.HydrogenToFuel = getContext.add.text(window.innerWidth / 4.5, window.innerHeight / 2, "Object Text").setScrollFactor(0).setDepth(5).setFontSize(20).setColor('#000000').setVisible(getContext.factoryVisibility);
    getContext.factory.add(getContext.HydrogenToFuel);
    getContext.factory.add(getContext.slot2)
}
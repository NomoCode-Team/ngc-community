export default (getContext: any) => {
    getContext.slot1 = getContext.add.image(window.innerWidth / 1.85, window.innerHeight / 3,"convert").setScrollFactor(0).setScale(0.5).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.slot1.setInteractive();
    getContext.factory.add(getContext.slot1)
    getContext.WaterToHydrogenAndOxygen = getContext.add.text(window.innerWidth / 4.5, window.innerHeight / 3, "Object Text").setScrollFactor(0).setDepth(5).setFontSize(16).setColor('#000000').setVisible(getContext.factoryVisibility);
    getContext.factory.add(getContext.WaterToHydrogenAndOxygen);
      getContext.slot1.on("pointerup", () => {
        if(getContext.getData.water > 0) {
        getContext.getData.water--;
        getContext.getData.hydrogen += 2;
        getContext.getData.oxygen++;
        }
    })
}
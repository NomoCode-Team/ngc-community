export default (getContext: any) => {
    getContext.speedText = getContext.add.text(32, 32, "Object Text").setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    getContext.waterText = getContext.add.text(32, 56, "Object Text").setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    getContext.ironText = getContext.add.text(32, 80, "Object Text").setScrollFactor(0).setFontSize(16).setColor('#ffffff');
    getContext.positionText = getContext.add.text(32, 128, "Object Text").setScrollFactor(0).setFontSize(16).setColor('#ffffff');
}


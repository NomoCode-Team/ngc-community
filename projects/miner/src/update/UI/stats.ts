export default (getContext: any) => {
    getContext.speedText.setText("Speed: " + Math.floor(getContext.player.body.speed))
    /*
    getContext.convertWaterToOH.setText(getContext.getData.water + ' Water Molecule = ' + getContext.getData.water * 2 + ' Hydrogen and ' + getContext.getData.water + ' Oxygen');
    getContext.convertHydrogenToFuel.setText(getContext.getData.hydrogen + ' Hydrogen = ' + getContext.getData.hydrogen + ' Fuel');
    */
    getContext.waterText.setText('Water: ' + getContext.getData.water);
    getContext.ironText.setText('Iron: ' + getContext.getData.iron);
    getContext.positionText.setText('Position X:' + Math.floor(getContext.getData.player_x) + " Position Y: " + Math.floor(getContext.getData.player_y));
}


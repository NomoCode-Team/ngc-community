export default (getContext: any) => {
    getContext.WaterToHydrogenAndOxygen.setText(getContext.getData.water + " Water = " + getContext.getData.water + " Oxygen + " + (getContext.getData.water * 2) + " Hydrogen")
    getContext.HydrogenToFuel.setText(getContext.getData.hydrogen + " Hydrogen = " + getContext.getData.hydrogen / 2 + " Fuel ")
}


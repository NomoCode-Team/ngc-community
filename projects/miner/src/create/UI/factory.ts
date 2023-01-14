import WaterToHydrogenAndOxygen from "./Factory/WaterToHydrogenAndOxygen";
import HydrogenToFuel from "./Factory/HydrogenToFuel";

export default (getContext: any) => {
    getContext.factoryVisibility = false;
    getContext.factory = getContext.add.group()
    getContext.factoryBackground = getContext.add.image(window.innerWidth / 2, window.innerHeight / 2, "factoryBackground").setScrollFactor(0).setScale(2.3).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.factoryLogo = getContext.add.image(window.innerWidth / 2, window.innerHeight / 6,"factoryLogo").setScrollFactor(0).setScale(1).setDepth(5).setVisible(getContext.factoryVisibility);
    getContext.factory.add(getContext.factoryBackground)
    getContext.factory.add(getContext.factoryLogo)
    WaterToHydrogenAndOxygen(getContext);
    HydrogenToFuel(getContext);
    getContext.input.keyboard.on("keydown-F", () => {
        if(getContext.factoryVisibility === false) {
                console.log("Opened Factory UI");
                getContext.factoryVisibility = true;
                getContext.factory.setVisible(getContext.factoryVisibility)
        }
        else if(getContext.factoryVisibility === true) {
            console.log("Closed Factory UI");
            getContext.factoryVisibility = false;
            getContext.factory.setVisible(getContext.factoryVisibility)
        }
    })
    getContext.slot2.on("pointerup", () => {
        if(getContext.getData.hydrogen > 0) {
            getContext.getData.hydrogen--;
            getContext.getData.fuel += 0.5;
        }
    })
}



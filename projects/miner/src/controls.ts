import { Input } from "phaser"

export default function controls(getContext: any) {

    if(localStorage.getItem("mobileState") === "false") {
        getContext.keys = {
        "W": getContext.input.keyboard.addKey(Input.Keyboard.KeyCodes.W),
        "A": getContext.input.keyboard.addKey(Input.Keyboard.KeyCodes.A),
        "S": getContext.input.keyboard.addKey(Input.Keyboard.KeyCodes.S),
        "D": getContext.input.keyboard.addKey(Input.Keyboard.KeyCodes.D),
    };
    }
    else if(localStorage.getItem("mobileState") === "true") {
        const Increase = getContext.physics.add.image(250, window.innerHeight - 250, "increase").setScale(1).setInteractive().setScrollFactor(0);
        const Brake = getContext.physics.add.image(250, window.innerHeight - 100, "brake").setScale(1).setInteractive().setScrollFactor(0);
        const turnLeft = getContext.physics.add.image(100, window.innerHeight - 100, "turnLeft").setScale(1).setInteractive().setScrollFactor(0);
        const turnRight = getContext.physics.add.image(400, window.innerHeight - 100, "turnRight").setScale(1).setInteractive().setScrollFactor(0);
        getContext.keys = {
        "W": Increase,
        "A": turnLeft,
        "S": Brake,
        "D": turnRight,
    };
    }
}


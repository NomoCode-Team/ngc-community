import { Input } from "phaser"

export default (getContext: any) => {
    let pointer = getContext.input.activePointer;
    if(localStorage.getItem("mobileState") === "false") {
        if (getContext.keys.W.isDown) {
        getContext.physics.velocityFromRotation(getContext.player.rotation, 200, getContext.player.body.acceleration);
        getContext.player.setDrag(1);
        getContext.getData.fuel--;
       }
       else {
        getContext.player.setAcceleration(0);
       }
       if (getContext.keys.A.isDown) {
        getContext.player.setAngularVelocity(-300);
       }
       else if (getContext.keys.D.isDown) {
        getContext.player.setAngularVelocity(300);
       }
       else if (getContext.keys.S.isDown) {
        getContext.player.setDrag(0.5);
       }
      else {
        getContext.player.setAngularVelocity(0);
       }
    }
    else if(localStorage.getItem("mobileState") === "true") {
        getContext.keys.W.on("pointerdown", () => {
                getContext.physics.velocityFromRotation(getContext.player.rotation, 200, getContext.player.body.acceleration);
                getContext.player.setDrag(1);
                getContext.getData.fuel--;
        })
        getContext.keys.S.on("pointerdown", () => {
            getContext.player.setDrag(0.5);
        })
        getContext.keys.A.on("pointerdown", () => {
            getContext.player.setAngularVelocity(-300);
        })
        getContext.keys.D.on("pointerdown", () => {
            getContext.player.setAngularVelocity(300);
        })
        getContext.keys.A.on("pointerup", () => {
            getContext.player.setAngularVelocity(0);
        })
        getContext.keys.D.on("pointerup", () => {
            getContext.player.setAngularVelocity(0);
        })
        getContext.keys.W.on("pointerup", () => {
            getContext.player.setAcceleration(0);
        })
    }
getContext.getData.player_x = getContext.player.x;
    getContext.getData.player_y = getContext.player.y;
}



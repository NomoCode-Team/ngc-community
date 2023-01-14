import Planet from "../planet";

export default (getContext: any) => {
    getContext.earth = new Planet(getContext, "earth", 3000, 1700);

    getContext.earth.on("pointerup", () => {
        if(Math.abs(getContext.getData.player_x - getContext.earth.x) < 500 && Math.abs(getContext.getData.player_y - getContext.earth.y) < 500) {
            console.log("Within Earth")
            getContext.getData.water++;
          }
    })
}


import Planet from "../planet";

export default (getContext: any) => {
    getContext.neptune = new Planet(getContext, "neptune", 300, 5700);

    getContext.neptune.on("pointerup", () => {
         if(Math.abs(getContext.getData.player_x - getContext.neptune.x) < 500 && Math.abs(getContext.getData.player_y - getContext.neptune.y) < 500) {
            console.log("Within Neptune")
        }
    })
}
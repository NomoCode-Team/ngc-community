import Planet from "../planet";

export default (getContext: any) => {
    getContext.mars = new Planet(getContext, "mars", 1300, 3000);

    getContext.mars.on("pointerup", () => {
        if(Math.abs(getContext.getData.player_x - getContext.mars.x) < 500 && Math.abs(getContext.getData.player_y - getContext.mars.y) < 500) {
            console.log("Within Mars")
        }
    })
}
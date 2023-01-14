import Planet from "../planet";

export default (getContext: any) => {
    getContext.mercury = new Planet(getContext, "mercury", 2300, 3000);

    getContext.mercury.on("pointerup", () => {
        if(Math.abs(getContext.getData.player_x - getContext.mercury.x) < 500 && Math.abs(getContext.getData.player_y - getContext.mercury.y) < 500) {
            console.log("Within Mercury")
            getContext.getData.iron++;
        }
    })
}
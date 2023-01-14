import Planet from "../planet";

export default (getContext: any) => {
    getContext.sun = new Planet(getContext, "sun", 3000, 3000);

    getContext.sun.on("pointerup", () => {
      if(Math.abs(getContext.getData.player_x - getContext.sun.x) < 750 && Math.abs(getContext.getData.player_y - getContext.sun.y) < 750) {
            console.log("Within Sun")
        }
    })
}
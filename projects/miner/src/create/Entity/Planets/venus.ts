import Planet  from "../planet";

export default (getContext: any) => {
    getContext.venus = new Planet(getContext, "venus", 4000, 3000);

    getContext.venus.on("pointerup", () => {
      if(Math.abs(getContext.getData.player_x - getContext.venus.x) < 500 && Math.abs(getContext.getData.player_y - getContext.venus.y) < 500) {
            console.log("Within Venus")
        }
    })
}
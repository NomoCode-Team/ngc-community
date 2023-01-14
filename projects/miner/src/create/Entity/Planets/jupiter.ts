import Planet from "../planet";

export default (getContext: any) => {
    getContext.jupiter = new Planet(getContext, "jupiter", 1225, 1500);

    getContext.jupiter.on("pointerup", () => {
          if(Math.abs(getContext.getData.player_x - getContext.jupiter.x) < 500 && Math.abs(getContext.getData.player_y - getContext.jupiter.y) < 500) {
            console.log("Within Jupiter")
          }
    })
}
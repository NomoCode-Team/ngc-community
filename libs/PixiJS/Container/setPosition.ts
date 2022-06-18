import * as PIXI from "pixi.js";

/**
 * @brief Sets position of the Pixi Container
 * @param container a Pixi Container for which position should be set
 * @param pos new position of the Container
 * @speak set Pixi object {container} position to {pos}
 * @notest
 */
export default function setPosition(container: PIXI.Container, pos: {x:number, y:number}) {
    container.position.x = pos.x
    container.position.y = pos.y
}


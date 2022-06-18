import * as PIXI from "pixi.js";

/**
 * @brief Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
 * @param graphics PIXI Graphics for which end to fill
 * @speak end fill Pixi Graphics {graphics}
 * @notest
 */
export default function endFill(graphics:PIXI.Graphics) {
    graphics.endFill()
}
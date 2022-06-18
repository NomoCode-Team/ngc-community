import * as PIXI from "pixi.js";

/**
 * @brief Draws a circle
 * @param graphics PIXI Graphics for which draw circle
 * @param position origin point of the circle
 * @param radius circle radius
 * @speak draw circle in Pixi Graphics {graphics} at position {position} and radius {radius}
 * @notest
 */
export default function endFill(graphics:PIXI.Graphics, position: {x:number, y:number}, radius:number) {
    graphics.drawCircle(position.x, position.y, radius);
}
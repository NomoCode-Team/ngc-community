import * as PIXI from "pixi.js";

/**
 * @brief Specifies a simple one-color fill that subsequent calls to other Graphics methods (such as lineTo() or drawCircle()) use when drawing.
 * @param graphics PIXI Graphics for which begin to fill
 * @param color the color of the fill
 * @param alpha alpha of the fill
 * @speak begin fill Pixi Graphics {graphics} with color {color} and alpha {alpha}
 * @notest
 */
export default function beginFill(graphics:PIXI.Graphics, color:number, alpha?:number) {
    graphics.beginFill(color,alpha)
}
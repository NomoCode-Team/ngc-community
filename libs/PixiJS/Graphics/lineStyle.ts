import * as PIXI from "pixi.js";

/**
 * @brief Sets lineStyle for PIXI Graphics object
 * @param graphics PIXI Graphics for which line style should be set
 * @param options PIXI ILineStyleOptions to set
 * @speak set Pixi Graphics {graphics} line style to {options}
 * @notest
 */
export default function lineStyle(graphics:PIXI.Graphics, options:PIXI.ILineStyleOptions) {
    graphics.lineStyle(options)
}
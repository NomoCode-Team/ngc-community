import * as PIXI from "pixi.js";

/**
 * @brief Sets background color for Pixi Renderer
 * @param renderer a Pixi Renderer for which background color should be set
 * @param color new background color to set
 * @speak set Pixi Renderer {renderer} background color to {color}
 * @notest
 */
export default function setBackgroundColor(renderer: PIXI.Renderer, color: number) : void {
    renderer.backgroundColor = color
}

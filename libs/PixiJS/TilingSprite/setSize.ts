import * as PIXI from "pixi.js";

/**
 * @brief Sets dimmenstion for TilingSprite
 * @param sprite TilingSprite to set dimensions for
 * @param width width of the TilingSprite
 * @param height height of the TilingSprite
 * @speak set Pixi Tiling Sprite {sprite} size to {width} x {height}
 * @notest
 */
export default function setSize(sprite: PIXI.TilingSprite, width: number, height: number) : void {
    sprite.width = width
    sprite.height = height
}
import * as PIXI from "pixi.js";

/**
 * @brief sets tint color value for Pixi Sprite
 * @param sprite Pixi Sprite for which new tint value should be apply
 * @param tint new color value of the tint to apply
 * @speak set Pixi Sprite {sprite} tint to {tint}
 * @notest
 */
export default function setTint(sprite: PIXI.Sprite, tint: number) : void {
    sprite.tint = tint
}


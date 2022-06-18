import * as PIXI from "pixi.js";

/**
 * @brief Sets scale of the tile for TilingSprite
 * @param sprite TilingSprite to set tile scale for
 * @param scale scale factor of the tile
 * @speak set Pixi Tiling Sprite {sprite} tile scale to {scale}
 * @notest
 */
export default function setTileScale(sprite: PIXI.TilingSprite, scale: number) : void {
    sprite.tileScale.x = scale
    sprite.tileScale.y = scale
}
import * as PIXI from "pixi.js";

/**
 * @brief Creates new PIXI TilingSprite
 * @return Pixi.js TilingSprite
 * @param texture texture from which TilingSprite will be created
 * @speak create Pixi Tiling Sprite from texture {texture}
 * @notest
 */
export default function create(texture: PIXI.Texture) : PIXI.TilingSprite {
    return new PIXI.TilingSprite(texture)
}
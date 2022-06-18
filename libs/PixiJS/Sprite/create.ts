import * as PIXI from "pixi.js";

/**
 * @brief Creates new PIXI Sprite
 * @return Pixi.js Sprite
 * @param img_url url of the image to create Sprite from
 * @speak create Pixi Sprite from image {img_url}
 * @notest
 */
export default function create(img_url: string) : PIXI.Sprite {
    const sprite = PIXI.Sprite.from(img_url)
    sprite.anchor.set(0.5);
    return sprite
}


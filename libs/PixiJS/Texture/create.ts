import * as PIXI from "pixi.js";

/**
 * @brief Creates new PIXI Texture
 * @return Pixi.js Texture
 * @param img_url url of the image to create Texture from
 * @speak create Pixi Texture from image {img_url}
 * @notest
 */
export default function create(img_url: string) : PIXI.Texture {
    return PIXI.Texture.from(img_url);
}


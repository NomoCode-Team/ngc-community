import * as PIXI from "pixi.js";

/**
 * @brief Creates new PIXI application
 * @return Pixi.js application
 * @speak create Pixi application
 * @notest
 */
export default function createApp() : PIXI.Application {
    return new PIXI.Application({ resizeTo: window })
}


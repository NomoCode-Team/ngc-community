import * as PIXI from "pixi.js";

/**
 * @brief Adds child to the Pixi Container
 * @param container a Pixi Container for which child should be appended
 * @param child Pixi object to be appended into container
 * @speak add Pixi object {child} to {container}
 * @notest
 */
export default function addChild(container: PIXI.Container, child: PIXI.Container) {
    container.addChild(child)
}


import * as Matter from "matter-js"

/**
 * @brief Creates new MatterJS Rectange Body
 * @param position position of the newly created MatterJS Body
 * @param width MatterJS Body width
 * @param height MatterJS Body height
 * @param isStatic defines if Body is static or not
 * @return MatterJS Rectangle Body
 * @speak create MatterJS Rectangle Body at position {position} and with size {width} x {height}
 * @notest
 */
export default function createRectangle(position: {x: number, y: number}, width: number, height: number, isStatic:boolean = false) : Matter.Body {
    return Matter.Bodies.rectangle(position.x, position.y, width, height, {isStatic: isStatic})
}


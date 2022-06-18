import * as Matter from "matter-js"

/**
 * @brief Continuously updates the MatterJS Render canvas
 * @param render MatterJS Render to be run
 * @speak run MatterJS Render {render}
 * @notest
 */
export default function create(render: Matter.Render) : void {
    Matter.Render.run(render)
}


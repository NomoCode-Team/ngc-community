import * as Matter from "matter-js"

/**
 * @brief Creates new MatterJS Render
 * @param engine MatterJS Engine to be used by Render
 * @param element HTMLElement where Render canvas will be inserted
 * @return MatterJS Render
 * @speak create MatterJS Render with Engine {engine} and append to {element}
 * @notest
 */
export default function create(engine: Matter.Engine,element: HTMLElement ) : Matter.Render {
    return Matter.Render.create({
        engine: engine,
        element: element
    })
}


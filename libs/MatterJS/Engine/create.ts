import * as Matter from "matter-js"

/**
 * @brief Creates new MatterJS Engine
 * @return MatterJS Engine
 * @speak create MatterJS Engine
 * @notest
 */
export default function create() : Matter.Engine {
    return Matter.Engine.create()
}


import * as Matter from "matter-js"

/**
 * @brief Creates new MatterJS Runner
 * @return MatterJS Runner
 * @speak create MatterJS Runner
 * @notest
 */
export default function create() : Matter.Runner {
    return Matter.Runner.create()
}


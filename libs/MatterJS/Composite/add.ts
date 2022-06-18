import * as Matter from "matter-js"

/**
 * @brief Adds MatterJS bodies to the MatterJS Composite
 * @param composite a MatterJS Composite to which add Bodies
 * @param bodies Array of MatterJS Bodies to add into Composite
 * @speak Add MatterJS Bodies {bodies} to Composite ${composite}
 * @notest
 */
export default function add(composite: Matter.Composite, bodies: Array<Matter.Body>) {
    Matter.Composite.add(composite, bodies)
}


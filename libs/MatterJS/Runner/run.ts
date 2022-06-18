import * as Matter from "matter-js"

/**
 * @brief Continuously ticks a Matter.Engine by calling Runner.tick on the requestAnimationFrame event.
 * @param runner a Runner to be updated
 * @param engine a Engine to be updated
 * @speak run MatterJS Runner {runner} with engine {engine}
 * @notest
 */
export default function run(runner: Matter.Runner, engine: Matter.Engine) : void {
    Matter.Runner.run(runner, engine)
}

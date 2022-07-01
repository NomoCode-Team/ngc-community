import Random_getRandom from "./getRandom"

/**
 * @brief Returns a pseudorandom integer between 0 and max ( max not inclusive )
 * @param max not inclusive right bound ( max value ) of the generated integer
 * @return generated pseudorandom integer
 * @speak get random integer less than {max}
 * @notest
 * @inline
 */
export default function getRandomInt(max:number): number {
  return Math.floor(Random_getRandom() * max);
}
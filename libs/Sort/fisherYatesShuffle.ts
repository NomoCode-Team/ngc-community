import getRandomInteger from "../Random/getRandomInt"

/**
 * @brief Takes in an array and returns it with randomly shuffled values
 * The algorithm produces an unbiased permutation: every permutation is equally likely. 
 * It takes time proportional to the number of items being shuffled and shuffles them in place. 
 * @param a array of values
 * @return randomly shuffled array of the same values
 */

 export default function fisherYatesShuffle(a: Array<any>): Array<any> {
  let currentIndex = a.length, temporaryValue: any, randomIndex: number

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = getRandomInteger(currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = a[currentIndex]
      a[currentIndex] = a[randomIndex]
      a[randomIndex] = temporaryValue
  }

  return a
}
import convertStringByItemDelToArray from "./convertStringByItemDelToArray"

/**
 * @brief converts words of an string (separated by spacebar) to values of an array
 * @param str string to convert
 * @return array of words from string
 */

export default function convertStringOfWordstoArray(str: string) {
  const itemdel = " "
  return convertStringByItemDelToArray(str, itemdel)
}
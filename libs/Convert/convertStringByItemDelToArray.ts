/**
 * @brief converts items of an string separated by itemdel to values of an array
 * @param str string to convert
 * @return array of itemdel split values from string
 */

export default function convertStringByItemDelToArray(str: string, itemdel: string) {
  return str.split(itemdel)
}
/**
 * @brief Creates Range HTML Element and append to element by id
 * @param id id of range element to create
 * @return reference to range
 */
 export default function createNewRangeAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("range")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
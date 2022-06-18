/**
 * @brief Creates Input HTML Element and append to element by id
 * @param id id of input element to create
 * @return reference to input
 */
 export default function createNewInputAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("input")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
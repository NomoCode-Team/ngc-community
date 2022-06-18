/**
 * @brief Creates Div HTML Element and append to element by id
 * @param id id of div element to create
 * @return reference to div
 */
 export default function createNewDivAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("div")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
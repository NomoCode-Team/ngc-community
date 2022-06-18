/**
 * @brief Creates Br HTML Element and append to element by id
 * @param id id of br element to create
 * @return reference to br
 */
 export default function createNewBrAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("br")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
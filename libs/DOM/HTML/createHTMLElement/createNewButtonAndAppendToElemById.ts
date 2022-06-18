/**
 * @brief Creates Button HTML Element and append to element by id
 * @param id id of button element to create
 * @return reference to button
 */
 export default function createNewButtonAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("button")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
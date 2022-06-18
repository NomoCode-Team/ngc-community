/**
 * @brief Creates Select HTML Element and append to element by id
 * @param id id of select element to create
 * @return reference to select
 */
 export default function createNewSelectAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("select")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
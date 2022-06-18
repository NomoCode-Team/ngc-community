/**
 * @brief Creates Label HTML Element and append to element by id
 * @param id id of label element to create
 * @return reference to label
 */
 export default function createNewLabelAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("label")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
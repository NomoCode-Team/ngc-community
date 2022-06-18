/**
 * @brief Creates Checkbox HTML Element and append to element by id
 * @param id id of checkbox element to create
 * @return reference to checkbox
 */
 export default function createNewCheckboxAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("input")
  elem.type = "checkbox"
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
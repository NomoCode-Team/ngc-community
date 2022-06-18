/**
 * @brief Creates HTML Div Element and appends to body
 * @param id_div id of div element to create
 * @return reference to div
 */
 export default function createDivWithIdAndAppendToDocumentBody(id_div: string): HTMLElement {
  const elem_div = document.createElement("div")
  elem_div.id = id_div
  return document.body.appendChild(elem_div)
}
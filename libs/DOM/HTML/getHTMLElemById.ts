/**
 * @brief gets html element by id
 * @param id id of element
 * @return reference to html element
 */

export default function getHTMLElemById(id: string): HTMLElement {
  return document.getElementById(id)
}
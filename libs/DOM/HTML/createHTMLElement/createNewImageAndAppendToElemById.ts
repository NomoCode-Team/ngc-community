/**
 * @brief Creates Image HTML Element and append to element by id
 * @param id id of image element to create
 * @return reference to image
 */
 export default function createNewImageAndAppendToElemById(id: string): HTMLElement {
  const elem = document.createElement("img")
  const elem_target = document.getElementById(id)
  return elem_target.appendChild(elem)
}
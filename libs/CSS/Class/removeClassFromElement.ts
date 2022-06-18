/**
 * @brief remove css class from an element
 * @param classname string of the css class to remove
 * @param element reference to html element
 */

export default function removeClassFromElement(classname: string, element: HTMLElement) {
  element.classList.remove(classname)
}
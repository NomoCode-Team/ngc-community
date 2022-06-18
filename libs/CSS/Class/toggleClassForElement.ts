/**
 * @brief toggles a css class on or off for an element
 * @param classname string of the css class to add
 * @param element reference to html element
 */

export default function toggleClassForElement(classname: string, element: HTMLElement) {
  element.classList.toggle(classname)
}
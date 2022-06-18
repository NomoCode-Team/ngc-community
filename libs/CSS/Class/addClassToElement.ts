/**
 * @brief add a css class to an element
 * @param classname string of the css class to add
 * @param element reference to html element
 */

 export default function addClassToElement(classname: string, element: HTMLElement) {
  element.classList.add(classname)
}
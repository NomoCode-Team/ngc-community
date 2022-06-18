import addClassToElement from "./addClassToElement"

/**
 * @brief add css classes to an element
 * @param arrayOfClassnames array of css classes to add
 * @param element reference to html element
 */

export default function addArrayOfClassesToElement(arrayOfClassnames: Array<string>, element: HTMLElement) {
  arrayOfClassnames.forEach(classname => {
    addClassToElement(classname, element) 
  })
}
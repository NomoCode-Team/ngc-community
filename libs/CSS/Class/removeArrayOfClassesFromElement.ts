import removeClassFromElement from "./removeClassFromElement"

/**
 * @brief remove css classes from an element
 * @param arrayOfClassnames array of css classes to remove
 * @param element reference to html element
 */

export default function removeArrayOfClassesToElement(arrayOfClassnames: Array<string>, element: HTMLElement) {
  arrayOfClassnames.forEach(classname => {
    removeClassFromElement(classname, element) 
  })
}
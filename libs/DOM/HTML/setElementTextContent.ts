import setElementPropToValue from "./setElementPropToValue"

/**
 * @brief Sets text content of the HTML element
 * @param element reference to the html element
 * @param text text content to apply into HTML element 
 */
export default function setElementTextContent(element: HTMLElement, text: string) {
  setElementPropToValue(element, "textContent", text)
}
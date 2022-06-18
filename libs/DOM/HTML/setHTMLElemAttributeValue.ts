/**
 * @brief sets attribute of HTML element to value
 * @param elem reference to HTML element
 * @param attr_name attribute to change
 * @param value value to change attribute to
 */

export default function setHTMLElemAttributeValue(elem: HTMLElement, attr_name: string, value: any) {
  elem.setAttribute(attr_name, value)
}
/**
 * @brief changes an html element style property to a value
 * @param elem html element reference
 * @param prop style property to change
 * @param value value to change style property to
 */

export default function setElementStylePropToValue(elem: HTMLElement, prop: string, value: any) {
  elem.style[prop] = value
}
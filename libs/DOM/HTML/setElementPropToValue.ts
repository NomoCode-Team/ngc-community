/**
 * @brief changes an html element property to a value
 * @param elem html element reference
 * @param prop property to change
 * @param value value to change property to
 */

export default function setElementPropToValue(elem: HTMLElement, prop: string, value: any) {
  elem[prop] = value
}